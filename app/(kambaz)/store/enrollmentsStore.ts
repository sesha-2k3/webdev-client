"use client";
import { create } from "zustand";
import type enrollmentsJson from "../database/enrollments.json";
export type Enrollment = (typeof enrollmentsJson)[number];
type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (enrollment: Enrollment) => void;
  unenroll: (userId: string, courseId: string) => void;
  setEnrollments: (enrollments: Enrollment[]) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  enroll: (enrollment) =>
    set((state) => ({
      enrollments: [...state.enrollments, enrollment],
    })),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
  setEnrollments: (enrollments) => set({ enrollments }),
}));
