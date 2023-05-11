import React from "react";

const Nav = () => {
    return(
        <nav id="widescreen-nav">
            <menu>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reserve</a></li>
                <li><a href="#" role="button" className="ghost-button-primary">Order</a></li>
                <li><a href="#">Log In</a></li>
            </menu>
        </nav>
    )
}

export default Nav;

