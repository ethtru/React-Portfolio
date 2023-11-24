import Footer from "../components/Footer";

export default function Project() {
  return (
    <>
      <h1>Work</h1>
      {/* <a href="https://ethtru.github.io/first-challenge/">
          <h3>Horiseon</h3>
          <img
            id="hero-pic"
            src="./assets/pics/digital-marketing-meeting.jpg"
            alt="Horiseon Website"
          />
        </a> */}
      <div id="pic-section">
        <a href="https://matter-of-taste-2cb992252e34.herokuapp.com/">
          <div class="sub-pic" id="matter-of-taste">
            <h4>Matter of Taste</h4>
          </div>
        </a>
        <a href="https://ethtru.github.io/Weather-Dashboard/">
          <div class="sub-pic" id="weather">
            <h4>Weather Dashboard</h4>
          </div>
        </a>
        <a href="https://erinhamrick.github.io/tasty-jams/">
          <div class="sub-pic" id="tasty-jams">
            <h4>Tasty Jams</h4>
          </div>
        </a>
        <a href="https://ethtru.github.io/Code-Quiz/">
          <div class="sub-pic" id="code-quiz">
            <h4>Code Quiz</h4>
          </div>
        </a>
      </div>
    </>
  );
}
