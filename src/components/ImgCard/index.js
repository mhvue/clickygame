import React from "react";
import "./style.css";

function ImgCard(props){
    return(
                <img className="img-responsive"
                id={props.id}
                alt={props.name} 
                src={props.image} 
                onClick={() => props.clickedMethod(props.id)}
                />
    );
}

export default ImgCard;