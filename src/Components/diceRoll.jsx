import React, { Component } from "react";
import Dice1 from "./dice";
import Dice2 from "./dice";

export default class diceRoll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false,
      Die1: "one",
      Die2: "two",
      match:false
    };
  }
  handleRoll = () => {
    this.setState({
      Die1: this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ],
      Die2: this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ],
      isRolling: true
    });
    if (this.state.Die2 === this.state.Die1){
        this.setState({match:true})
    }
    setTimeout(() => {
      this.setState({
        isRolling: false
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <Dice1 face={this.state.Die1} roll = {this.state.isRolling} />
        <Dice2 face={this.state.Die2} roll = {this.state.isRolling} />
        <button className="dice-button" onClick={this.handleRoll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "ROLLING!!!" : "START!!!"}
        </button>
        {this.state.match && 
        <div>
            <h1>You won !!!</h1>
        </div>    
            }
        <h3>Kenzizi karim <br/>playground experiment</h3>


   
      </div>
    );
  }
}
