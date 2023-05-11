import React from "react";

const SmallNav = () => {
    return(
        <nav id="mobile-nav">
            <menu>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reserve</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#" role="button" className="button-yellow">Order</a></li>
            </menu>
        </nav>
    )
}

export default SmallNav;