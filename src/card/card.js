import "./card.css";
import React, { useState, useEffect } from "react";
function Card(props) {
	const [Card, setCard] = useState(); //The evolution chain for the pokemon.
	return (
		<div className="cardCon">
            <div className="d-flex flex-column flex-sm-row">
                <img className="cardImg" alt={props.alt} src={props.src} />
                <div>
                    <h3 className="cardTitle">{props.title}</h3>
                    <p className="cardDesc">{props.desc}</p>
                    {props.badges && props.badges.map((title,i) => (
                        <span className="badge">{title}</span>
                    ))}
                </div>
            </div>
            <hr/>
        </div>
	);
}
export default Card;
