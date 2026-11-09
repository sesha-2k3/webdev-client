"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAssignmentsStore, type Assignment } from "../../../../store/assignmentsStore";
const field = "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const row = "mb-4 grid grid-cols-1 items-start gap-1 sm:grid-cols-[160px_1fr] sm:gap-4";
const rowLabel = "text-sm sm:pt-2 sm:text-right";
const box = "rounded border border-neutral-300 p-4";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId && a.course === courseId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment>(
    () =>
      existing ?? {
        _id: assignmentId,
        title: "New Assignment",
        course: courseId,
        description: "New Assignment Description",
        points: 100,
        due: "",
        available: "",
        until: "",
      },
  );
  const backToList = () => router.push(`/courses/${courseId}/assignments`);
  const save = () => {
    if (existing) {
      updateAssignment({ ...assignment, course: courseId });
    } else {
      addAssignment({ ...assignment, course: courseId });
    }
    backToList();
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className={`${field} mb-2`}
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {assignmentId}
      </p>
      <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={6}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        className={`${field} mb-6`}
      />
      <div className={row}>
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
          }
          className={field}
        />
      </div>
      <div className={row}>
        <label htmlFor="wd-group" className={rowLabel}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={rowLabel}>
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>
      <div className={row}>
        <label htmlFor="wd-submission-type" className={rowLabel}>
          Submission Type
        </label>
        <div className={box}>
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${field} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
      </div>
      <div className={row}>
        <span className={rowLabel}>Assign</span>
        <div className={box}>
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-4`} />
          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className={`${field} mb-4`}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                className={field}
              />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium">
        Sample notes
      </label>
      <textarea id="wd-ai-editor-notes" rows={3} className={`${field} mb-4`} />
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={backToList}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
