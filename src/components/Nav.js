import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav id="widescreen-nav">
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="reserve">Reserve</Link></li>
                <li><Link to="#" role="button" className="ghost-button-primary">Order</Link></li>
                <li><Link to="#">Log In</Link></li>
            </menu>
        </nav>
    )
}

export default Nav;

