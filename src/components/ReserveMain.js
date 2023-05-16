import React, { useState, useReducer } from "react";
import seatingImg from "../images/ll-restaurant-seating.jpg"
import BookingForm from "./BookingForm";

const ReserveMain = () => {

    const [book, setBook] = useState({
        date: "",
        time: "",
        guests: 2,
        occasion: "None"
    });

    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const updateTimes = (availableTimes, action) =>{
        if (action.type === "change_date") {
            setBook({...book, date: action.date});
            return ["17:00", "18:00", "104:00", "20:00", "21:00", "22:00"]
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return(
        <main id="reserve-main">
            <article id="reserve-hero"
                 style={{backgroundImage: `url(${seatingImg})`}}
                 alt="Booths and tables at Little Lemon."
            ></article>
            <h1>Reserve a Table</h1>

            <BookingForm times={availableTimes} dispatch={dispatch} initBooking={book} changeBooking={setBook} />

            <h3>Current date: {book.date}</h3>
            <h3>Current time: {book.time}</h3>
            <h3>Current Guests: {book.guests}</h3>
            <h3>Current occasion: {book.occasion}</h3>
        </main>
    )
}

export default ReserveMain;