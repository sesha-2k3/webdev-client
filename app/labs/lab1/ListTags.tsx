export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>

      {/* On your own: favorite recipe */}
      My favorite recipe, chicken fried rice:
      <ol id="wd-your-favorite-recipe">
        <li>Marinate the chicken using your favorite spices</li>
        <li>Slice the onions</li>
        <li>Pour oil in a wok-like pan and heat</li>
        <li>Add eggs and scramble them</li>
        <li>Keep the eggs away after scrambling</li>
        <li>Add some oil and saute the onions</li>
        <li>Add the scrambled eggs, leftover rice with onions</li>
        <li>Add soy sauce and your favorite sauce for your taste and serve</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      {/* On your own: favorite books */}
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>The Da Vinci Code</li>
        <li>Hyperfocus</li>
        <li>Meditations</li>
      </ul>

      {/* With AI */}
      HTML tags from this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1: the largest heading</li>
        <li>p: a paragraph with vertical spacing</li>
        <li>ol: a numbered list</li>
        <li>ul: a bulleted list</li>
        <li>span: a generic inline container</li>
      </ul>
    </div>
  );
}