import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/" activeclassname="active">Portfolio</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeclassname="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </li>
        </ul>
    </nav>
);
export default Navbar;