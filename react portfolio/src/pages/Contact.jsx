import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <h1>Contact Me</h1>
      <br />
      <form id="name-form">
        Enter your name:{" "}
        <textarea type="text" name="your_name" rows="2" cols="50"/>
      </form>
      <form id="content-form">
        Message: <textarea name="message" rows="7" cols="50" />
      </form>
      <div id="button-div">
      <button id="submit-button">Submit</button>
      </div>
    </>
  );
}
