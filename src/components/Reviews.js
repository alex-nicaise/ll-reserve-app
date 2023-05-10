import React, { useState } from "react";
import testimonials from "../APIs/testimonials";

const Reviews = () => {
    const [rev, setRev] = useState({title: "", description: "", rating: ""});

    function handleClick(rating, title, description) {
        setRev({title: title, description: description, rating: rating})
    }

    return(
        <div id="review-bounding">
            <div id="customer-panel">

                <div
                className="customer-review"
                key={testimonials[0].id}
                onClick={() => {
                    handleClick(testimonials[0].rating, testimonials[0].title, testimonials[0].description)
                }}>
                    <p><strong>{testimonials[0].name}</strong></p>
                    <p>{testimonials[0].inOut} | {testimonials[0].time} ({testimonials[0].rating} stars)</p>
                </div>

                <div
                className="customer-review"
                key={testimonials[1].id}
                onClick={() => {
                    handleClick(testimonials[1].rating, testimonials[1].title, testimonials[1].description)
                }}>
                    <p><strong>{testimonials[1].name}</strong></p>
                    <p>{testimonials[1].inOut} | {testimonials[1].time} ({testimonials[1].rating} stars)</p>
                </div>

                <div
                className="customer-review"
                key={testimonials[2].id}
                onClick={() => {
                    handleClick(testimonials[2].rating, testimonials[2].title, testimonials[2].description)
                }}>
                    <p><strong>{testimonials[2].name}</strong></p>
                    <p>{testimonials[2].inOut} | {testimonials[2].time} ({testimonials[2].rating} stars)</p>
                </div>

            </div>
            <div id="rev-panel">
            <p>{rev.rating}</p>
            <p>{rev.title}</p>
            <p>{rev.description}</p>
            </div>
        </div>
    )
}

export default Reviews;