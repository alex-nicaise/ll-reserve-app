import React from "react";

const BookingForm = (props) =>{

    return(
    <form>
        <label htmlFor="res-date">Date</label>
        <input type="date" id="res-date" onChange={e=>props.dispatch({type: "change_date", date: e.target.value})}/>

        <label htmlFor="res-time">Time</label>
        <select id="res-time" onChange={e=>props.changeBooking({...props.initBooking, time: e.target.value})}>
            {props.times.map(time=><option key={time}>{time}</option>)}
        </select>

        <label htmlFor="guests">Guests</label>
        <input type="number"
        placeholder={props.initBooking.guests}
        min="1"
        max="10"
        id="guests"
        onChange={e=>props.changeBooking({...props.initBooking, guests: e.target.value})} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={e=>props.changeBooking({...props.initBooking, occasion: e.target.value})}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
        </select>

        <input type="submit" value="Submit Reservation"/>
    </form>
    )
}

export default BookingForm;