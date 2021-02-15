import React from "react"
import "../index.css"
import zavala from "../images/zavala.png"


const Card = (props) => {
    return(
        <button className="card" onClick={() => console.log("Clicked")}>
            <img src={zavala} alt="Commander Zavala"></img>
            <h3>Commander Zavala</h3>
        </button>
    )
}

export default Card;