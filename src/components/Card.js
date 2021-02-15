import React from "react"
import "../index.css"



const Card = (props) => {
    return(
        <button className="card" onClick={() => console.log("Clicked")}>
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
        </button>
    )
}

export default Card;