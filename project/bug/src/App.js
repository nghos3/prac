import React, {Component,Fragment} from 'react';
import Ques from './dispQues';
import Skill from "./skill";
import Role from "./role";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ques: [
      {q:"What is HTML?",
    ans:["x","y","z","a","b"],
    skill:"HTML",
    difficulty:"EASY",
    role:"Software Engineer",
    spell:1,
    Sresponse:"There is a spelling mistake",
     redflag:1,
   "Rresponse":"It is too simple"},

]
    };
  }

  render() {
    return (
      <Fragment>

<Ques question ={this.state.ques[0]}/>
 </Fragment>
);
  }
}

export default App;
