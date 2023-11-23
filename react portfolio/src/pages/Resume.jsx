import Footer from "../components/Footer";

export default function Resume() {
    return (
      <div>
        <h1>Resume</h1>
        <p>
          <a href="/path/to/your/resume.pdf" download>
            <button className="btn">
              <i className="fa fa-download"></i> Download Resume
            </button>
          </a>
        </p>
      </div>
    );
  }