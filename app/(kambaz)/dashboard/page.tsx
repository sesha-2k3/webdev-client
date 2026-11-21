"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useAccountContext();
  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId,
    );
  const loadCourses = async () => {
    setCourses(
      currentUser && !showAllCourses
        ? await client.findMyCourses()
        : await client.fetchAllCourses(),
    );
  };
  useEffect(() => {
    loadCourses();
  }, [currentUser, showAllCourses]);
  useEffect(() => {
    const loadEnrollments = async () => {
      setEnrollments(currentUser ? await enrollmentsClient.findMyEnrollments() : []);
    };
    loadEnrollments();
  }, [currentUser, setEnrollments]);
  const onToggleEnrollment = async (courseId: string) => {
    if (!currentUser) return;
    if (isEnrolled(courseId)) {
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
      unenroll(currentUser._id, courseId);
    } else {
      enroll(await enrollmentsClient.enrollIntoCourse(currentUser._id, courseId));
    }
    await loadCourses();
  };
  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="flex flex-wrap items-center justify-between gap-2">
        Dashboard
        <span className="flex gap-2">
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-enrollments-my-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
          <button
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        </span>
      </h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-my-number"
      />
      <input
        type="date"
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrolled={currentUser ? isEnrolled(c._id) : undefined}
            onToggleEnrollment={() => onToggleEnrollment(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
