import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child.js';
import Child2 from './child2.js';

let z;



class App extends Component {


    constructor(props) {
        super(props);
       // this.state = { stateMsg: "DOm ko jante ho?" };
this.state = { value:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
        
    }
 handleChange(e) {
    
    this.setState({value: e.target.value});

  }
 handleSubmit(e) {
 this.setState({ value: e.target.value });   
 z=this.state.value;
  alert("NIGGA you are "+this.state.value);
  }

    render() {

        return (
     
      <div className = "App" >
      <h1>THE NIGGA APP </h1>
         <h3>CHANGE MESSAGE</h3>
        <form >
          <input
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.handleSubmit}>
          Change 
          </button>
        </form>
             
            
             
            <Child msg = "" / >
            
             <h3>
            {this.state.value}
              
            </h3>

            <h3>hai</h3>
            </div>
        )

    }
}



export default App;