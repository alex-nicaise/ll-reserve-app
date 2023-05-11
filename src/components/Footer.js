import React from "react";
import Logo from "../images/little-lemon-logo.svg";
import facebookIcon from "../images/icons/facebook-icon.png";
import twitterIcon from "../images/icons/twitter-icon.png";
import instaIcon from "../images/icons/instagram-icon.png";
import openTableIcon from "../images/icons/open-table-icon.png";
import tikTokIcon from "../images/icons/tiktok-icon.png";

const Footer = () => {
    return(
        <article id="footer">
            <section>
                <img src={Logo} alt="Little Lemon Logo"/>
                <h3>Little Lemon Restaurant</h3>
                <p>
                    30 East 62nd Street <br />
                    Chicago, Illinois 10018
                </p>
            </section>
            <section>
                <div id="contact-footer">
                   <h3>Contact</h3>
                    <p>Telephone: <a href="tel: +19999999999">999-999-9999</a></p>
                    <p>Email: <a href="mailto: littlelemon@gmail.com">littlelemon@gmail.com</a></p> 
                </div>
                <div id="footer-menu">
                    <menu>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reserve</a></li>
                        <li><a href="#">Order Online</a> </li>
                    </menu>
                </div>
            </section>
            <section>
                <h3>Social Media</h3>
                <div id="social-icons">
                    <img src={facebookIcon} alt="Little Lemon Facebook Icon"/>
                    <img src={instaIcon} alt="Little Lemon Instagram Icon"/>
                    <img src={twitterIcon} alt="Little Lemon Twitter Icon"/>
                    <img src={tikTokIcon} alt="Little Lemon Tik Tok Icon"/>
                    <img src={openTableIcon} alt="Little Lemon Open Table Icon"/>
                </div>
            </section>
            <section>
                <p>Copyright © 2023 Little Lemon Restaurant. All rights Reserved</p>
            </section>
        </article>
    )
}

export default Footer;