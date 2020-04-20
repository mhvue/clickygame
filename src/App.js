import React, {Component} from "react";
import ImgCard from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";
import "../src/components/ImgCard/style.css";


class App extends Component {

state = {
  candyImg,
  clickedImgs: [],
  score: 0,
  highscore: 0,
  message: "",
  winmsg: "",
  middlemsg: ""
};

clickedImg= (id) => {
    const valClickedImgs = this.state.clickedImgs;
  
    //going to check if id is in valClickedImg array. If it is, score goes to 0
  if(valClickedImgs.includes(id) || valClickedImgs.length === 12){
    console.log(valClickedImgs)
    this.setState({
      score: 0,
      message: "...Image already clicked! Game Over. Click to start again.",
      middlemsg: "",
      winmsg: ""
    });
    //this is so we can empty the valCilckImgs array
    valClickedImgs.length =0;
    
  } 
  //else, if id not in array, push the id into the valClickedIMg array, score goes up 1, reset msg to empty string
  else{
    valClickedImgs.push(id)
    //score go up if ids NOT the same in array already 
    this.setState({
    middlemsg: "",
    score: this.state.score + 1,
    highscore: this.state.score + 1,
    message: "",
    });
    
  }

  //add more message for user. 
  if(valClickedImgs){
    this.setState({
      winmsg: "",
    });
  }
 if(valClickedImgs.length === 12){
    this.setState({
      score: 0,
      // highscore: 0,
      winmsg: "Winner! You've got a good memory!"
    });
    valClickedImgs.length = 0;
  }
  else if(valClickedImgs.length === 6) {
    this.setState({
      middlemsg: "Wow! You're good. Keep it up!"
    });
  }
  else{
    console.log(valClickedImgs)
  }

  

}

render() {
    return (
      <div>
        <Title 
        score={this.state.score} 
        highscore={this.state.highscore}
        message={this.state.message} 
        winmessage={this.state.winmsg} 
        middlemessage={this.state.middlemsg} 
        />
        <div className="imgHolder">
        {this.state.candyImg.map((candy) => (
        <ImgCard
          key={candy.id}
          id={candy.id}
          name={candy.name}
          image={candy.image}
          clickedMethod={this.clickedImg}
        />)).sort(()=> Math.random() - 0.5)} 
        </div>
        
      </div>
      /* got from tutor for .sort above */
     
    );
  }
 
}

export default App;
