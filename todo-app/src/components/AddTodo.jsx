import React, { Component, Fragment } from 'react';

export default class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: ''
		}
	}

	handleNewTodoUpdate(event) {
		this.setState({inputText: event.target.value});
	}

	handleAddNewItem() {
		this.props.onNewTask(this.state.inputText);
		this.setState({inputText: ''});
	}

	render() {
		return <Fragment>
			<input value={this.state.inputText} onChange={this.handleNewTodoUpdate.bind(this)} type="text" placeholder="Type new tasks here!"/>
			<input type="submit" onClick={this.handleAddNewItem.bind(this)}/>
		</Fragment>
	}
}