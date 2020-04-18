import React from "react";
import "./style.css";

function ImgCard(props){
    return(
            <div className="cardHolder">
                <img 
                id={props.id}
                className ="images" 
                alt={props.name} 
                src={props.image} 
                onClick={() => props.clickedMethod(props.id)}
                />
            
            </div>


    );
}

export default ImgCard;