import Navigation from './Navigation'
import pic from "../assets/images/PIC.jpg"
function Header() {
  
  return (
    <>
    <header class="header">
<div id="header-pic">
  <img src={pic} alt="image-of-ethan" id="ethan-pic" />
  <h1>Ethan Trudell</h1>
</div>
<Navigation/>
</header>
<div class="hero">
      <p class="hero-text">
        <i>Let me help you build something great!</i>
      </p>
    </div>
    <section>
        <h2 id="aboutme">About Me</h2>
        <p>
          I graduated from the University of Tennessee with a Bachelor's degree
          in Marketing in 2009. Since then, I have held several jobs in the
          business space ranging from recruitment to healthcare management. In
          the spring of this year, I decided to make a change and harness a new
          skill within the web development community. This shift has allowed me
          to use my creativity and problem solving skills to develop attractive,
          functional web applications. Please have a look around my site to see
          some of my work!
        </p>
      </section>
</>
  )
}

export default Header;