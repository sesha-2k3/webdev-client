export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>

      {/* ===== 2.1.13 Relative ===== */}
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          {/* With AI */}
          <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-landscape">
            AI nudge
          </div>
          {/* On your own */}
          <div className="wd-my-pos-relative-nudge wd-bg-color-green wd-fg-color-white wd-dimension-square">
            My nudge
          </div>
        </div>
      </div>

      {/* ===== 2.1.14 Absolute ===== */}
      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          {/* With AI: bottom-right corner */}
          <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-bg-color-gray wd-dimension-landscape">
            AI bottom-right
          </div>
          {/* On your own: top-right corner */}
          <div className="wd-my-pos-absolute-tr wd-bg-color-green wd-fg-color-white wd-dimension-square">
            My top-right
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
      </div>

      {/* ===== 2.1.15 Fixed ===== */}
      <div id="wd-css-position-fixed">
        <h2>Fixed position</h2>
        Checkout the blue square that says &quot;Fixed position&quot; stuck all
        the way on the right and half way down the page. It doesn&apos;t scroll
        with the rest of the page. Its position is &quot;Fixed&quot;.
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
        {/* With AI */}
        <div id="wd-ai-fixed" className="wd-ai-pos-fixed wd-bg-color-red wd-fg-color-white">
          AI fixed
        </div>
        {/* On your own */}
        <div className="wd-my-pos-fixed wd-bg-color-green wd-fg-color-white">
          Sesha&apos;s badge
        </div>
      </div>
    </div>
  );
}
