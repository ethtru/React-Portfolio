import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <p>
        <div>
          <h2 id="proficiencies">Proficiencies:</h2>
          <ul>
            <li id="li">JavaScript</li>
            <li id="li">CSS</li>
            <li id="li">HTML</li>
            <li id="li">Node</li>
            <li id="li">React</li>
            <li id="li">MongoDB</li>
            <li id="li">SQL</li>
            <li id="li">Express</li>
            <li id="li">Mongoose</li>
          </ul>
        </div>
        <a href="./public/Resume.pages" download>
          <button className="btn">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </a>
      </p>
    </div>
  );
}
