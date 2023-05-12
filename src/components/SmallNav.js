import React from "react";
import { Link } from "react-router-dom";

const SmallNav = () => {
    return(
        <nav id="mobile-nav">
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="reserve">Reserve</Link></li>
                <li><Link to="#">Log In</Link></li>
                <li><Link to="#" role="button" className="button-yellow">Order</Link></li>
            </menu>
        </nav>
    )
}

export default SmallNav;