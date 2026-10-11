const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>

      <div>
        <div id="wd-ai-float" className="wd-float-right wd-dimension-landscape wd-bg-color-green wd-fg-color-white">
          AI float
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>

      <div>
        <img className="wd-float-left" src="/images/teslabot.jpg" alt="Teslabot" />
        I lift weights four days a week and code the rest of the time. This
        paragraph wraps around the Teslabot image floated to the left, and the
        clearer below stops the wrap so the next section starts on its own line.
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
