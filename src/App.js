import React, {Component} from "react";
import ShowImg from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";

class App extends Component {

state = {
  candyImg
};

//Fisher Yates Method
 shuffleMethod = (array) =>  {
   let i, j, k; 
  for (i = array.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = array[i]
    array[i] = array[j]
    array[j] = k
  }

  return array;
  }


shuffleImgs = () => {
  const candyImg = this.state.candyImg.shuffleMethod(this.state.candyImg)
  this.setState(candyImg);
};


render() {
    return (
      <div>
      <Title />
      {this.state.candyImg.map((candy,index) => (
      <ShowImg 
        key={candy.id}
        id={candy.id}
        name={candy.name}
        image={candy.image}
        shuffle={this.shuffleImgs}
      />
      ))}
      </div>
    );
  }
 
}


export default App;
