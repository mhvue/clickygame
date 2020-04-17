import React, {Component} from "react";
import ShowImg from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";


class App extends Component {

state = {
  candyImg
};

render() {
    return (
      <div>
      <Title />
      {this.state.candyImg.map(candy => (
      <ShowImg 
        key={candy.index}
        name={candy.name}
        image={candy.image}
      />
      ))}
      </div>
    );
  }
 
}

export default App;
