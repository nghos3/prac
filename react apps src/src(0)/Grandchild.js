import React, { Component } from 'react';
 


class Grandchild extends Component{
  render(){
    return(
      <div className="Grandchild">
      <h1>I am Grandchild</h1>
      <h2>{this.props.msg2}</h2>
      <h3>{this.props.msg3}</h3>
      </div>
  )

  }
}

export default Grandchild;
