// rcc:- shot- Class Components 
// 

import React, { Component } from 'react'

export default class Class extends Component {
  constructor(){
    super();
    console.log("Hello Ravi");
    
  }

  render() {
    return (
      <div>
        <h1>Hello Class Component</h1>
      </div>
    )
  }
}
