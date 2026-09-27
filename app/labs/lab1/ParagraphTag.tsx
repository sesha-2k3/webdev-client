export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>

      {/* With AI */}
      <p id="wd-ai-p">
        Wrapping text in a p tag makes it a block element, and browsers give
        paragraphs a default top and bottom margin, which creates the vertical
        gap between them.
      </p>

      {/* On your own: replace the bracketed parts with your own details */}
      <p id="wd-p-your-1">
        My name is Sesha, and I am from [YOUR HOMETOWN]. I am currently
        pursuing an MS in Computer Science, and outside of classes I enjoy
        working out and playing music.
      </p>
      <p id="wd-p-your-2">
        In this course, I hope to learn how to build full stack web
        applications with Next.js, from designing user interfaces to
        connecting them with a database. [ADD ANYTHING ELSE YOU WANT TO LEARN.]
      </p>
    </div>
  );
}