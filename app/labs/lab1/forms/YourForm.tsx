"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" placeholder="FirstName" defaultValue="Seshadri" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" placeholder="LastName" defaultValue="Veeraraghavan Vidyalakshmi" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        type="password"
        id="wd-your-student-id"
        placeholder="Student ID"
        title="Your student ID is hidden as you type"
      />
      <br />

      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I want to learn how to build full stack web applications with Next.js, React, and MongoDB."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <label>Enrollment status:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-chk-fullstack"
        defaultChecked
      />
      <label htmlFor="wd-your-chk-fullstack">Full stack development</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-chk-typescript"
        defaultChecked
      />
      <label htmlFor="wd-your-chk-typescript">TypeScript</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-chk-cloud" />
      <label htmlFor="wd-your-chk-cloud">Cloud computing</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-chk-ml" />
      <label htmlFor="wd-your-chk-ml">Machine learning</label>
      <br />

      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="SE">Software Engineering</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />

      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "DATABASES"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="APIS">REST APIs</option>
        <option value="DATABASES">Databases</option>
        <option value="DEPLOYMENT">Deployment</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">School email:</label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="lastname.f@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2027"
        min={2025}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input
        type="date"
        id="wd-your-start-date"
        defaultValue="2025-09-03"
        min="2020-01-01"
        max="2030-12-31"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited am I about this course (0–10):
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        min="0"
        max="10"
        defaultValue="8"
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}