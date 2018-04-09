import React from 'react';
export default class Addtodo extends React.Component{
	constructor(props){
		super(props)
		this.state = {value:""};
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);

	}
	handleChange(e){
		let values = [];
		console.log(e.target.value);
		if(e.target.value[e.target.value.length-1] == '\n' )
		{
			values.push(e.target.value);
			console.log(values);
		}
		this.setState({value:e.target.value});

	}
	addTodo(todo)
	{
		//Ensure the todo text isn't empty
		if(todo.length > 0){			
			this.props.getInput(todo);
			this.setState({value:''});
		}	
	}
	render(){
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<button  onClick={()=>this.addTodo(this.state.value)}>Submit</button>
			</div>
			);
	}
}