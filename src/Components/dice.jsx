import React, { Component } from 'react'

export default class dice extends Component {
    render() {
        return (
           <i className={` 
           Dice
            fas fa-dice-${this.props.face}
            ${this.props.roll && "rotate-center"}
            `} ></i>
        )
    }
}
