import React, {Component} from "react";
import ImgCard from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";

let message= "";

class App extends Component {

state = {
  candyImg,
  clickedImgs: [],
  score: 0,
  highscore: 0,
  message: ""
};

clickedImg= (id) => {
    const valClickedImgs = this.state.clickedImgs
    console.log(valClickedImgs)

  if(valClickedImgs.includes(id)){
    // if the same = score goes to 0
    this.setState({score: 0});
    message= "Oh No! Image already clicked!"
    this.setState({message})
    
  }
  else if (!valClickedImgs.includes(id)){
    valClickedImgs.push(id)
    //score go up if ids the same
    this.setState({score: this.state.score + 1})
    this.setState({highscore: this.state.score})
    this.setState({message: ""})
  
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
       />
      {this.state.candyImg.map((candy) => (
      <ImgCard
        key={candy.id}
        id={candy.id}
        name={candy.name}
        image={candy.image}
        clickedMethod={this.clickedImg}
      />)).sort(()=> Math.random() - 0.5)} 
      </div>
      /* got from tutor for .sort above */
     
    );
  }
 
}

export default App;
