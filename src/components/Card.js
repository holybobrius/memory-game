import React from "react"
import "../index.css"



const Card = (props) => {
    return(
        <button className="card" onClick={props.handleClick.bind(this, props.name)}>
            <img src={props.image} alt={props.name}></img>
            <h3>{props.name}</h3>
        </button>
    )
}

export default Card;