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
            name: "Commander Zavala",
            image: zavala
        },

        {
            name: "Cayde-6",
            image: cayde
        },
        
        {
            name: "Ikora Rey",
            image: ikora
        },
        
        {
            name: "Suraya Hawthorne",
            image: hawthorne
        },
        
        {
            name: "The Crow",
            image: crow
        },
        
        {
            name: "Xol, Will of the Thousands",
            image: xol
        },
        
        {
            name: "The Drifter",
            image: drifter
        },
        
        {
            name: "Exo-Stranger",
            image: stranger
        },
        
        {
            name: "Dominus Ghaul",
            image: ghaul
        },

        {
            name: "Emperor Calus",
            image: calus
        },

        {
            name: "Variks, the Loyal",
            image: variks
        },

        {
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

    const randomizedCharacters = shuffle(characters).map(character => 
        <Card name={character.name} image={character.image}/>
    )

    return (
        <main>
            {randomizedCharacters}
        </main>
    )
}

export default CardsContainer