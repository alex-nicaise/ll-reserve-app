import React, { useEffect, useReducer } from "react";
import seatingImg from "../images/ll-restaurant-seating.jpg"
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../APIs/bookingAndTimes";
import { useNavigate } from "react-router-dom";
import { stringify } from "flatted";

const ReserveMain = (props) => {

    // UseEffect

    useEffect(()=>{localStorage.clear()});

    // Reducer

    const initializeTimes = () => {
        return fetchAPI(new Date())
    };

    const updateTimes = (availableTimes, action) =>{
        if (action.type === "change_date"){
            availableTimes = fetchAPI(new Date(action.date));
            return availableTimes;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    // Submit Form

    const submitForm = (data) => {
        localStorage.setItem("formData", stringify(data));
        submitAPI(data) && props.navigate("/confirmed");
    }

    // Return

    return(
        <main id="reserve-main">
            <article id="reserve-hero"
                 style={{backgroundImage: `url(${seatingImg})`}}
                 alt="Booths and tables at Little Lemon."
            ></article>
            <h1>Reserve a Table</h1>

            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </main>
    )
}

export default ReserveMain;