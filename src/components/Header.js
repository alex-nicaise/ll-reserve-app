import React from "react";
import Nav from "./Nav";
import SmallNav from "./SmallNav";
import Logo from "../images/little-lemon-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            {/* META TAGS */}
            <meta name="og:description" content="A Mediterranean eatery in the heart of Chicago's South Side."/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:image" content="https://example.com/one-place-fishing-store.jpg"/>
            <meta name="author" content="Alex N"/>
            <meta name="language" content="english"/>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta name="format-detection" content="telephone=yes"/>
            <meta name="copyright" content="Copyright 2023"></meta>
            <meta name="robots" content="index,follow" />

            <Link to="/"><img src={Logo} alt="Little Lemon Logo"/></Link>

            <Nav />
            <SmallNav />
        </header>
    )
}

export default Header;

