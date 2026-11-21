"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
type Assignment = {
  id?: number;
  title?: string;
  description?: string;
  due?: string;
  completed?: boolean;
  score?: number;
};
export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => { fetchAssignment(); }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input className="mb-2 block w-full max-w-md rounded border border-neutral-300 px-2 py-1"
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <textarea className="mb-2 block w-full max-w-md rounded border border-neutral-300 px-2 py-1"
        rows={3} value={assignment.description ?? ""}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <input type="date" className="mb-2 block rounded border border-neutral-300 px-2 py-1"
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <label className="mb-2 flex items-center gap-2">
        <input type="checkbox" checked={!!assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <button type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
