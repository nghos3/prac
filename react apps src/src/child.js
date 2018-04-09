import React, { Component } from 'react';
 import Grandchild from './Grandchild.js';


class Child extends Component{
  render(){
    return(
      <div className="child1">
      <h1>NIGGA</h1>
      <h2>{this.props.msg}</h2>
      <Grandchild msg2="" msg3={this.props.msg}/>
      </div>
  )

  }
}

export default Child;
