import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo';
import MasterList from './MasterList';

export default class App extends Component {
	state = {tasks: []};

	componentDidMount() {
		fetch('http://localhost:8000/tasks').then(response => response.json()).then(tasks => {
			this.setState({tasks});
		});
	}

	handleNewTask(newTask) {
		const tasks = this.state.tasks;

		// POST to json-server
		// Push response.body in tasks

		tasks.push({id: Math.random()*10000000, tick: false, item: newTask});

		this.setState(tasks);
	}

	render() {
		return <Fragment>
			<AddTodo inputText={this.props.inputText} onNewTask={this.handleNewTask.bind(this)}/>
			<MasterList tasks={this.state.tasks} />
		</Fragment>
	}
}