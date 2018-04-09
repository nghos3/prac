import React, { Component, Fragment } from 'react';

export default class Task extends Component {
	render() {
		return <Fragment>
			<input type="checkbox" defaultChecked={this.props.task.tick} name={"abc"} value={"abc"} />
			{this.props.task.item}
		</Fragment>
	}
}
