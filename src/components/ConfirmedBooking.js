import React from "react";
import Layout from "./Layout";

const ConfirmedBooking = () => {

    // Local Storage

    const formStuff = JSON.parse(localStorage.formData);

    return(
        <Layout>
            <main id="confirmed-booking">
                <h1>Thank You {formStuff[1]}!</h1>
                <p>Your table has been booked.</p>
            </main>
        </Layout>
    )
}

export default ConfirmedBooking;