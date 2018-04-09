import React, { Component } from 'react';
// import deleteRequest from './Api.js';
import './App.css';
import CreateToDo from './CreateToDo.js'
import ToDoList from './ToDoList';
import './styles.css';

var {deleteRequest} = require('./Api.js');

class App extends Component {

  componentDidMount(){

    const url = 'http://localhost:3000/items'
    fetch(url)
    .then(res => res.json())
    .then((result) => {
      this.setState({items: [...result]});
    });
  }


  constructor(props){
    super(props);
    this.state = {
      items: [{
        // heading: 'Demo Heading',
        // details: 'Demo detail for completing the to do list app right away',
        // id: 0
      }]
    };
  }

  handleClick(i) {
     this.setState(prevState => ({
      items: prevState.items.concat(i),
    }));      
  }


  handleDelete(i){
    /* Handle delete here */

    let array = this.state.items;
    const indexValue = array.map(function(e) { return e.id; });   // getIndexOfElement(array,i);
    array.splice(indexValue,1);
    deleteRequest(i);
    this.setState((prevState) => ({
      items: array,
      counter: prevState.counter - 1
    }));

  }

  render() {
    return (
      <div className="App">
        <CreateToDo
             onReturn={i => this.handleClick(i)}
         />
        <ToDoList item = {this.state.items} onDelete = {j => this.handleDelete(j)} />
      </div>
    );
  }
}

export default App;
