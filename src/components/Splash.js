import React, { Component } from "react";

// const Greet = props => {
//   return (
//     <div>
//       <h1>Welcome, visitor</h1>
//       {props.children}
//     </div>
//   )
// }


class Greet extends Component {
  constructor(){
    super()
    this.state = {
      message: "Welcome, cunt"
    }
  }

  changeMessage(){
    this.setState({
      message: "CUUUUNT"
    })
  }



  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Clickity</button>
      </div>
    )
  }
}

export default Greet
