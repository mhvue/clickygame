import React from "react";
import "./TitleStyle.css";

function Title(props) {
    return (
        <div className="container-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><h2>Welcome!</h2></a>
            <h2><b>Your Score:</b> {props.score} || <b>Top Score: </b> {props.highscore}</h2>
            <h2 className="messageBox">{props.message}</h2>
            <h2 className="winMsg">{props.winmessage}</h2>
            <h2 className="keepGoingMsg">{props.middlemessage}</h2>
            </nav>

        <br></br>
        <br></br>
        <br></br>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Time For Some Candy!</h1>
                <p className="lead text-center">Click on an image of your favorite candies. Don't click on it twice 
                 or else you lose some points!</p>
            </div>
        </div>

        </div>
    );
}

export default Title;