import React, { useState } from "react";

const BookingForm = () =>{

    const [book, setBook] = useState({
        date: "",
        time: "",
        guests: 2,
        occasion: "None"
    });

    return(
    <form>
        <label htmlFor="res-date">Date</label>
        <input type="date" id="res-date" onChange={e=>setBook({...book, date: e.target.value})}/>

        <label htmlFor="res-time">Time</label>
        <select id="res-time" onChange={e=>setBook({...book, time: e.target.value})}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>

        <label htmlFor="guests">Guests</label>
        <input type="number"
        placeholder={book.guests}
        min="1"
        max="10"
        id="guests"
        onChange={e=>setBook({...book, guests: e.target.value})} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>

        <input type="submit" value="Submit Reservation"/>

        <h3>Current date: {book.date}</h3>
        <h3>Current time: {book.time}</h3>
        <h3>Current Guests: {book.guests}</h3>
        <h3>Current occasion: {book.occasion}</h3>
    </form>
    )
}

export default BookingForm;