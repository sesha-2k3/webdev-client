export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-width-110px">AI pinned</div>
        <div className="wd-bg-color-yellow">AI natural</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          AI stretches
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">
          My column grows
        </div>
        <div className="wd-bg-color-red">Natural</div>
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
      </div>
    </div>
  );
}
