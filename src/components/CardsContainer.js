import React, { useState } from "react"
import Card from "./Card"
import zavala from "../images/zavala.png"
import cayde from "../images/cayde.png"
import ikora from "../images/ikora.png"
import hawthorne from "../images/hawthorne.jpg"
import crow from "../images/crow.jpg"
import xol from "../images/xol.jpg"
import drifter from "../images/drifter.jpg"
import stranger from "../images/stranger.jpg"
import ghaul from "../images/ghaul.jpg"
import calus from "../images/calus.png"
import variks from "../images/varyks.jpg"
import oryx from "../images/oryx.png"

const CardsContainer = () => {
    
    const characters = [
        {
            id: 0,
            name: "Commander Zavala",
            image: zavala
        },

        {
            id: 1,
            name: "Cayde-6",
            image: cayde
        },
        
        {
            id: 2,
            name: "Ikora Rey",
            image: ikora
        },
        
        {
            id: 3,
            name: "Suraya Hawthorne",
            image: hawthorne
        },
        
        {
            id: 4,
            name: "The Crow",
            image: crow
        },
        
        {
            id: 5,
            name: "Xol, Will of the Thousands",
            image: xol
        },
        
        {
            id: 6,
            name: "The Drifter",
            image: drifter
        },
        
        {
            id: 7,
            name: "Exo-Stranger",
            image: stranger
        },
        
        {
            id: 8,
            name: "Dominus Ghaul",
            image: ghaul
        },

        {
            id: 9,
            name: "Emperor Calus",
            image: calus
        },

        {
            id: 10,
            name: "Variks, the Loyal",
            image: variks
        },

        {
            id: 11,
            name: "Oryx, the Taken King",
            image: oryx
        },
    ]

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    // on load/update randomize cards

    // logic for handling clicks

    const handleClick = () => {
        console.log("Clicked");
        setCards(shuffle(characters).map(character => 
            <Card name={character.name} image={character.image} handleClick={handleClick} key={character.id}/>));
    }

    const [cards, setCards] = useState(shuffle(characters).map(character => 
        <Card name={character.name} image={character.image} handleClick={handleClick} key={character.id}/>
    ))

    

    return (
        <main>
            {cards}
        </main>
    )
}

export default CardsContainer