import React, { useState } from "react";
import flashCards from "../cards";
import ProgressBar from "./progressBar";

function Card() {
    let [card, setCard] = useState(flashCards[0])
    const [showingAnswer, setShowingAnswer] = useState(false);
    const [barPrecentage,setBarPrecentage] = useState((1*100)/flashCards.length)
    
    function toggleAnswer() {
        setShowingAnswer(!showingAnswer)
    }
    function getCard(event) {
        let index = flashCards.indexOf(card)
        let isNext = event.target.name==="next"
        let newIndex = isNext?index+1:index-1;
        if ((index === flashCards.length - 1 && isNext) || (index === 0 && !isNext)) return
        let newCard = flashCards[newIndex]
        setBarPrecentage(((flashCards.indexOf(newCard)+1)*100)/flashCards.length) 
        setCard(newCard);
        setShowingAnswer(false);


    }

    return <> 
        <ProgressBar barPrecentage = {barPrecentage} index= {flashCards.indexOf(card)+1} />
    
    <div className="Card-Container">
        <div className={`Card ${showingAnswer ? "flipped" : ""}`} >
            <div className="card-face card-front">
                <p>{card.question}</p>
            </div>
            <div className="card-face card-back">
                <p>{card.answer}</p>
            </div>


        </div>
        <nav className="card-navBar">
            <button onClick={getCard} name="previous">Previous</button>
            <button onClick={toggleAnswer} name="show" >{showingAnswer ? "Hide Answer" : "Show Answer"}</button>
            <button onClick={getCard} name="next">Next</button>


        </nav>

    </div>
    </>
}

export default Card