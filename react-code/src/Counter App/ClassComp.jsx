import React, { Component } from 'react'

export default class ClassComp extends Component {
  constructor(){
    super()

      this.state={
        count:0
      }
  }

       inc=()=>{
        this.setState({
          count:this.state.count+1
        })
          
      }

      dec=()=>{
      this.setState({
        count:this.state.count-1
      })
      }

   res=()=>{
      this.setState({
        count:0
      })
      }
      
  
  render() {
    return (
      <div>
        <h4>Class Component ues by app</h4>
        <p>{this.state.count}</p>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
        <button onClick={this.res}>Reset</button>
      </div>
    )
  }
}
