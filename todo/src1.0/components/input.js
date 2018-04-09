import React from 'react';

export default class Addinp extends react.Components
{
	constructor(props)
	{
        super(props);
         this.state={value:"test"};
        this.handleChange =this.handleChange.bind(this);
        this.addtodo=this.addtodo.bind(this);
	}
     
    

    handleChange(e)
    {
	console.log('handleChange');
    }


    addtodo(e)
    {
	console.log('todo',e);
   }

render()
{

	return(
         <form>
         <input type="text" value=""  onChange={this.handleChange}/>
         <button type="btn btn-primary" onClick={()=>addtodo(this.state.value)}>submit</button>
         </form>
		);
}
}