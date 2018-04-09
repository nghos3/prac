import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Todoinp from './components/todoinp';
import './components/todoinp.css';
import TodoItems from './components/todoitems';
//import Addinp from './components/input';
class App extends Component {
  
  constructor(props)
  {
    super(props)
    this.state=
    {
      todos: [
      {id:0,text:"fkjkjbjb jnjnjn"},
      {id:1,text:"vmghvv uhluh"},
      {id:2,text:"kjb bnnmnb"}
      ],
      nextId:3
    }
  this.addTodo=this.addTodo.bind(this);
  this.removeTodo=this.removeTodo.bind(this);
  }

  addTodo(Todotext)
  {
      console.log(Todotext);
  }
removeTodo(id)
{
  console.log('removed',id);
}

  render() 
  {
      return (
                      <div className="App">
                      <div className="todoWrap">
                      <Header/>
                      <Todoinp todoText="" addTodo={this.addTodo}/>
                      </div>
                      </div>
              );
  }
}

export default App;
