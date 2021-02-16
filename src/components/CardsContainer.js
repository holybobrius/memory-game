import React, { useState, useEffect } from "react"
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

const CardsContainer = (props) => {
    
    const characters = [
        {
            id: 0,
            name: "Commander Zavala",
            image: zavala,
            clicked: false
        },

        {
            id: 1,
            name: "Cayde-6",
            image: cayde,
            clicked: false
        },
        
        {
            id: 2,
            name: "Ikora Rey",
            image: ikora,
            clicked: false
        },
        
        {
            id: 3,
            name: "Suraya Hawthorne",
            image: hawthorne,
            clicked: false
        },
        
        {
            id: 4,
            name: "The Crow",
            image: crow,
            clicked: false
        },
        
        {
            id: 5,
            name: "Xol, Will of the Thousands",
            image: xol,
            clicked: false
        },
        
        {
            id: 6,
            name: "The Drifter",
            image: drifter,
            clicked: false
        },
        
        {
            id: 7,
            name: "Exo-Stranger",
            image: stranger,
            clicked: false
        },
        
        {
            id: 8,
            name: "Dominus Ghaul",
            image: ghaul,
            clicked: false
        },

        {
            id: 9,
            name: "Emperor Calus",
            image: calus,
            clicked: false
        },

        {
            id: 10,
            name: "Variks, the Loyal",
            image: variks,
            clicked: false
        },

        {
            id: 11,
            name: "Oryx, the Taken King",
            image: oryx,
            clicked: false
        },
    ]

    const [clickedCards, setClickedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
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

    const [cards, setCards] = useState();

    const reset = () => {
        setClickedCards([]);
        setScore(0);
    }

    useEffect(() => {
        const handleClick = (characterName) => {
            
            if(!clickedCards.includes(characterName)) {
                clickedCards.push(characterName);
                setScore(score + 1);
                if(score >= highScore) {
                    setHighScore(score + 1);
                    
                }
            } else {
                reset();
            } 
        }  
        setCards(shuffle(characters).map(character => 
            <Card name={character.name} image={character.image} handleClick={handleClick} key={character.id} clicked={character.clicked}/>));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [score, highScore, clickedCards]
    )

    

    

    return (
        <main>
            <div className="scores">
                <p>Current Score: {score}</p>
                <p>Best Score: {highScore}</p>
            </div>
            <div className="cards-container">{cards}</div>
        </main>
    )
}

export default CardsContainer