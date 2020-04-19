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
  message: ""
};

clickedImg= (id) => {
    const valClickedImgs = this.state.clickedImgs;
  
    //going to check if id is in valClickedImg array. If it is, score goes to 0
  if(valClickedImgs.includes(id)){
    this.setState({
      score: 0,
      message: "...Image already clicked! Game Over. Click to start again."
    });
    //this is so we can empty the valCilckImgs array
    valClickedImgs.length =0;
    
  }
  //else, if id not in array, push the id into the valClickedIMg array, score goes up 1, reset msg to empty string
  else{
    valClickedImgs.push(id)
    //score go up if ids NOT the same in array already 
    this.setState({
    score: this.state.score + 1,
    highscore: this.state.score,
    message: "",
    })
  }
}
//noticed that scores are a little off. Need to fix..


render() {
    return (
      <div>
        <Title 
        score={this.state.score} 
        highscore={this.state.highscore}
        message={this.state.message} 
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
