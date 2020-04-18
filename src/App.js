import React, {Component} from "react";
import ImgCard from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";



class App extends Component {

state = {
  candyImg,
  clickedImgs: [],
  score: 0,
  highscore: 0,
};

clickedImg= (id) => {
    const valClickedImgs = this.state.clickedImgs
    console.log(valClickedImgs)

  // console.log(valClickedImgs.includes())
    

  if(valClickedImgs.includes(id)){
    console.log("clicked id: " + id)
    alert("same")
    // if the same = score goes to 0
    this.setState({score: 0})
  }
  else if (!valClickedImgs.includes(id)){
    alert("not same")
    valClickedImgs.push(id)
    //score go up if ids the same
    this.setState({score: this.state.score + 1}, () => console.log(this.state.score));
    //high score here 
    this.setState({highscore: this.state.score})
  
  }
  else{
    console.log(valClickedImgs)
  }
  
}


render() {
    return (
      <div>
      <Title score={this.state.score} highscore={this.state.highscore}/>
      {this.state.candyImg.map((candy) => (
      <ImgCard
        key={candy.id}
        id={candy.id}
        name={candy.name}
        image={candy.image}
        clickedMethod={this.clickedImg}
      />)).sort(()=> Math.random() - 0.5)} 
      {/* got from tutor for .sort above */}
      </div>
    );
  }
 
}



export default App;
