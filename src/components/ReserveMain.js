import React from "react";
import seatingImg from "../images/ll-restaurant-seating.jpg"
import BookingForm from "./BookingForm";

const ReserveMain = () => {
    return(
        <main id="reserve-main">
            <article id="reserve-hero"
                 style={{backgroundImage: `url(${seatingImg})`}}
                 alt="Booths and tables at Little Lemon."
            ></article>
            <h1>Reserve a Table</h1>
            <BookingForm/>
        </main>
    )
}

export default ReserveMain;