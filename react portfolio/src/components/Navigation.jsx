// import {link} from 'react-router-dom'

// export default function Navigation() {
//     return (
//         <nav>
//   <a href="#aboutme">About Me </a>
//   <a href="#work">Work </a>
//   <a href="#contactme">Contact Me </a>
// </nav>
//     )
// }

import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/Project"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Project' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
