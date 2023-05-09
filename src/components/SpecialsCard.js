import React from "react";

const SpecialsCard = (props) =>{
    return(
        <div className="specials-card" id={props.id}>
            <img src={props.source} alt={props.imageAlt} />
            <p><strong>{props.header}</strong></p>
            <p><del>{props.originalPrice}</del> {props.price}</p>
            <p>{props.body}</p>
            <a href="#" className="card-footer-link">Order Online</a>
        </div>
    )
}

export default SpecialsCard;