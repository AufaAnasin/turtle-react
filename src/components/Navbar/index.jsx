import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import '../Navbar/index.css'

const Navbar = () => (
    <>
    <input className="input-navbar" type='checkbox' id="active" />
    <label for="active" className="menu-btn"><FontAwesomeIcon icon={faBars} /></label>
    <div class="wrapper">
        <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="insert">Insert</a></li>
        </ul>
    </div>
    </>
)

export default Navbar