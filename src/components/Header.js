import React from "react";
import { Button } from "@adobe/react-spectrum";

const Header = () => {
    return(
        <header>
            {/* META TAGS */}
            <meta name="description" content="Little Lemon Web App"/>
            <meta name="title" content="Little Lemon Restaurant"/>
            <meta name="author" content="Alex N"/>
            <meta name="language" content="english"/>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta name="format-detection" content="telephone=yes"/>
            <meta name="copyright" content="Copyright 2023"></meta>
            <meta name="robots" content="index,follow" />

            {/* NAVIGATION BAR */}
            <nav>
                <img src="" alt="Little Lemon Logo"/>
                <menu>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reserve</a></li>
                    <li><a href="#" role="button"><Button className="ghost-button">Order</Button></a></li>
                    <li><a href="#">Log In</a></li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;

