import { Button } from "@adobe/react-spectrum";
import React from "react";
import specials from "../specials";
import SpecialsCard from "./SpecialsCard";

const Main = () => {

    return(
        <main>

        {/* HOME HEADER */}
        <article>
            <section>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a Mediterranean restaurant located on the South side of Chicago. We serve up all your favorite dishes from the homeland, but specialize in seafood. Our mission is to delivery delicious meals to the customer using only the freshest ingredients with the utmost quality.</p>
            </div>
            </section>
            <section>
                <img src="" alt="Dining tables and booths inside Little Lemon Restaurant"/>
            </section>
        </article>

        {/* SPECIALS */}
        <article>
            <section>
                <h2>Specials</h2>
                <a href="#" role="button"><Button className="primary-button">Online Menu</Button></a>
            </section>
            <section>
              {
                specials.map(dish =>
                    <SpecialsCard
                    id={dish.id}
                    header={dish.name}
                    originalPrice={dish.oPrice}
                    price={dish.price}
                    body={dish.description}
                    />
                )
              }
            </section>
        </article>

        {/* REVIEWS */}
        <article>
            <h2>What Customers are Saying</h2>
            <section>
                
            </section>
        </article>

        </main>
    )
}

export default Main;