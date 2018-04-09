import React, { Component } from 'react';
import {Row, Toast} from 'react-materialize';
import './styles.css';

// import postRequest from './Api.js'
var {postRequest} = require('./Api.js');




class CreateToDo extends Component {

	constructor(props){
		super(props);
		this.state = {
			heading: '',
			details: '',
			id: ''
		}
		this.handleChangeForHeading = this.handleChangeForHeading.bind(this);
		this.handleChangeForDesc = this.handleChangeForDesc.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeForHeading(e){
		this.setState({ heading: e.target.value });

	}
	handleChangeForDesc(e){
		this.setState({ details: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.state.details.length && !this.state.details.length && !this.state.date.length){
			return
		}

		let temp = Object.assign({},this.state);
		/* send post request here */


		const temp1 = postRequest(temp);
		this.props.onReturn(temp);
	}

	render(){
		return(
			<div>
				<h3> Create a ToDo List </h3>
				<Row className='collapsed'>	  
				  	<div className="row">
    					<form className="col s12" onSubmit={this.handleSubmit}>
      						<div className="row">
        						<div className="input-field col s12">
          							<input placeholder='Enter the Heading for ToDo' onChange={this.handleChangeForHeading} />
          							<input placeholder='Enter the Description for List' onChange={this.handleChangeForDesc} />          							
          							<Toast toast="Task Created">Create ToDo</Toast>
        						</div>
      						</div>
    					</form>
  					</div>	
				</Row>
			</div>
			);
	}
}

export default CreateToDo;