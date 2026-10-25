import Link from "next/link";
import * as db from "../../../../database";

const field = "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const row = "mb-4 grid grid-cols-1 items-start gap-1 sm:grid-cols-[160px_1fr] sm:gap-4";
const rowLabel = "text-sm sm:pt-2 sm:text-right";
const box = "rounded border border-neutral-300 p-4";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} className={`${field} mb-2`} />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <label htmlFor="wd-description" className="mb-1 block text-sm font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={6}
        defaultValue={assignment?.description ?? ""}
        className={`${field} mb-6`}
      />

      <div className={row}>
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input id="wd-points" defaultValue={assignment?.points ?? 100} className={field} />
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
            defaultValue={assignment?.due}
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
                defaultValue={assignment?.available}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={field} />
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
