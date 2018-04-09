import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Addtodo from './addtodo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.getInput = this.getInput.bind(this);
    this.updatingstate = this.updatingstate.bind(this)
    this.id = 0;
    this.dele=this.dele.bind(this);
  }

  
  
  getInput(input){
    var url = "http://localhost:3000/employees";
    Request.post(url)
    .send({ id: this.id , todoitem: input })
    .then(this.updatingstate)

  }
  componentWillMount(){
    var url = "http://localhost:3000/employees";
    Request.get(url).then((response)=>{
      this.setState({
        employees:response.body
      });
    });

  }
  updatingstate(){
    var url = "http://localhost:3000/employees";
    Request.get(url).then((response)=>{
      this.setState({
        employees:response.body
      });
    });
  }

  dele(key){
   console.log(key);
   var url = `http://localhost:3000/employees/${key}`;
   Request.del(url)
     .then(this.updatingstate)
}

  render() {
    var employees = _.map(this.state.employees, (employee) =>{
      return (<li> <button  onClick={() => {this.dele(employee.id)}} type="submit">Delete</button> {employee.todoitem}</li>
    );});
    return (
      <div>
        <Addtodo getInput={this.getInput} />
        <ul>{employees}</ul>
      </div>
    );
  }
}

export default App;

 