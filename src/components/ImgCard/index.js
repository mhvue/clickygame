import React from "react";
import "./style.css";

function ImgCard(props){
    return(
            <div className=".cardHolder container-fluid">
                <img className="img-responsive"
                id={props.id}
                alt={props.name} 
                src={props.image} 
                onClick={() => props.clickedMethod(props.id)}
                />
            
            </div>


    );
}

export default ImgCard;