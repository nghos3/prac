import React, { Component } from 'react';
import Task from './Task';

export default class MasterList extends Component {
	render() {
		return <ul>
			{this.props.tasks.map(task => <li key={task.id}><Task task={task}/></li>)}
		</ul>
	}
}