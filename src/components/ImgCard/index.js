import React from "react";
import "./style.css";

function ImgCard(props){
    return(
            <div className="cardHolder">
            
                <img className ="images" alt={props.name} src={props.image} />
            
            </div>


    );
}

export default ImgCard;