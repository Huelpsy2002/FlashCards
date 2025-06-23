import React,{useState} from "react";
import flashCards from "../cards";



function ProgressBar(probs) {
   

    return <div className="ProgressBar">
        <div style={{ width:probs.barPrecentage+"%"}} className="bar"></div>
        <p style={{display: probs.barPrecentage==100?"none":"inline"}}>{probs.barPrecentage}%</p>
        <p  style={{visibility: probs.barPrecentage>=80?"hidden":"visible"}} className="numOfCards">{probs.index} of 20</p>


    </div>

}



export default ProgressBar