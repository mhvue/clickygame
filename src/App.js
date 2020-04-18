import React, {Component} from "react";
import ImgCard from "./components/ImgCard";
import candyImg from "./components/Images";
import Title from "./components/Title";



class App extends Component {

state = {
  candyImg,
  clickedImgs: [],
  score: 0
};



clickedImg= (id) => {
    const valClickedImgs = this.state.clickedImgs
    console.log(valClickedImgs)

  // console.log(valClickedImgs.includes())
    
// if the same = pts go down
  if(valClickedImgs.includes(id)){
    console.log("clicked id: " + id)
    alert("same")
    this.state.candyImg.sort(()=> Math.random() - 0.5)
    this.setState({score: -1 })
  }
  else if (!valClickedImgs.includes(id)){
    alert("not same")
    valClickedImgs.push(id)
    this.setState({score: +1})
  }
  else{
    console.log(valClickedImgs)
  }

}

render() {
    return (
      <div>
      <Title score={this.state.score}/>
      {this.state.candyImg.map((candy) => (
      <ImgCard
        key={candy.id}
        id={candy.id}
        name={candy.name}
        image={candy.image}
        clickedMethod={this.clickedImg}
      />
      ))
      .sort(()=> Math.random() - 0.5)} 
      {/* credit to tutor for .sort above */}
      </div>
    );
  }
 
}



export default App;
