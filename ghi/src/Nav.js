import { NavLink } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="https://i.postimg.cc/hP1qD8w9/DALL-E-2022-12-07-11-24-30-anime-girl-playing-roulette-digital-art.png" alt="" width="60" height="48"></img>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavDropdown id="nav-dropdown" title="Anime" menuVariant="dark">
                  <NavDropdown.Item as={Link} to="/animelist">
                    Anime List</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavDropdown id="nav-dropdown" title="Account" menuVariant="dark">
                  <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
