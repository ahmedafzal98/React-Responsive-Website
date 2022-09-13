import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out This Epic Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              path="/services"
              text="Explore to the hidden waterfall deep inside the amazon jungle"
              label="Adventure"
            />
            <CardItem
              src="images/img-2.jpg"
              path="/services"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              path="/services"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
            />
            <CardItem
              src="images/img-4.jpg"
              path="/services"
              text="Experience Football on Top of the Himalyan Mountains"
              label="Adventure"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              path="/services"
              text="Right through the Sahara Deserton a guided camel tour"
              label="Adrenaline"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
