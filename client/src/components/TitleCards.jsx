import React, { useEffect, useRef } from "react";
import "./TitleCards.css"
import cards_data from "../assets/cards/Cards_data";


function TitleCards(props) {

    return (
        <div className="title-cards">
            <h2>{props.theme ? props.theme : "Popular on ThePit"}</h2>
            <div className="card-list" >
                {cards_data.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={card.image} alt="Card Image" />
                        <p>{card.title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards;
