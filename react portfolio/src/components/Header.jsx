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
 
</>
  )
}

export default Header;