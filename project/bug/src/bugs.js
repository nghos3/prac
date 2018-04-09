import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/Error';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import yellow from 'material-ui/colors/orange';


//
// function colrSel(){
//   const colr ={RedFlag:[red[500],ExpandMoreIcon,"#F44336"],SpellFlag:[blue[500],ExpandMoreIcon,"#F44336"],ShortFlag:[green[500],ExpandMoreIcon,"#F44336"]};
//   return colr.RedFlag;
// }
let ava;
let ico;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

  },
  avatar: {
    backgroundColor:red[500],
  },
  avatar1: {
    backgroundColor:yellow[500],
  },
  avatar2: {
    backgroundColor:blue[500],
  }

});

class Bugs extends Component {

  render(){

  const { classes } = this.props;
  let style = {};
  if(this.props.flag==1){
      style = {backgroundColor: "#F44336"};
      ava=<Avatar aria-label="Recipe" className={classes.avatar} >
                     Q
                   </Avatar>;
    ico= <ExpandMoreIcon />;

  }else if(this.props.flag == 2){
    style = {backgroundColor: "#FF9800"};
    ava=<Avatar aria-label="Recipe" className={classes.avatar1} >
                   Q
                 </Avatar>;

  }
  else if(this.props.flag == 3){
    style = {backgroundColor: "#2196F3",};
     ava=<Avatar aria-label="Recipe" className={classes.avatar2} >
                    Q
                  </Avatar>;

  }
  console.log(ava);

  return (

    <div className={classes.root}>
      <ExpansionPanel >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/> } style = {style}   >
          <Typography className={classes.heading}>
<IconButton> {ava}</IconButton>
              RedFlag</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>


      </ExpansionPanel>


    </div>
  );
}
}
Bugs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bugs);
