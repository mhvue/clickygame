import React from "react";
import "./TitleStyle.css";

function Title(props) {
    return (
        <div className="container-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><h2>Welcome!</h2></a>
            </nav>


        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Time For Some Candy!</h1>
                <p className="lead text-center">Click on an image of your fave candies. Don't click on it twice 
                else you lose some points!</p>
          
            <br></br>
                <h3>Your Score: {props.score}</h3>
                <h3>Top Score:{props.highscore}</h3>
            
            </div>
        </div>

        </div>
    );
}

export default Title;