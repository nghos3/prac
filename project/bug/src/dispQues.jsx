import React, {Fragment} from 'react';
import Card, {CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import {withStyles} from 'material-ui/styles';
import blueGrey from 'material-ui/colors/grey';
import Bookmark from 'material-ui-icons/BookmarkBorder';
import SpellErr from 'material-ui-icons/SpeakerNotesOff';
import Rflag from 'material-ui-icons/Report';
import Editor from 'material-ui-icons/Edit';
import Collapse from 'material-ui/transitions/Collapse';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import ExpansionPanel, {ExpansionPanelSummary,ExpansionPanelDetails,ExpansionPanelActions} from 'material-ui/ExpansionPanel';
import BookmarkON from 'material-ui-icons/Bookmark'
import Snackbar from "material-ui/Snackbar";
import CloseIcon from "material-ui-icons/Close";
import Dialog, {DialogActions,DialogContent,DialogContentText,DialogTitle,} from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Slide from "material-ui/transitions/Slide";





 let Rcolo="",Scolo="",Mark;

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  root: {
    flexGrow: 1,
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon:{color:'blue'},
  avatar:{backgroundColor:blueGrey[900]},
  chip:{color:"#0091EA",
   align:"right"},
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
    expandOpen: {

  color:"#263238",
    transform: 'rotate(360deg)',
  },
  close: {
     width: theme.spacing.unit * 4,
     height: theme.spacing.unit * 4
   },
   snackpos: {
     marginleft: "auto"
   },
});


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Ques extends React.Component {
constructor(props){
  super(props);
  this.state = {
    expanded: false,
    open: false,
    marker:false ,snack: false,
     Snackvalue:"",
     Dialog: false,
   };}

   handleDialogOpen = () => {
       this.setState({ Dialog: true });
     };

     handleDialogClose = () => {
       this.setState({ Dialog: false });
     };

   handleSnackErrorClick = () => {
    this.setState({ snack: true ,Snackvalue:"Error Message is displayed"});
  };
  handleSnackSpellClick = () => {
   this.setState({ snack: true ,Snackvalue:"Spell message is diplayed"});
 };

  handleSnackClose = () => {
    this.setState({ snack: false });
  };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  setBookmark = () => {
this.setState({ marker: !this.state.marker });
  };

  render() {
    const {  popopen,    } = this.state;

      if(this.props.question.redflag===1){
        Rcolo="red";
      }
      else {
        Rcolo="";
      }
     if(this.props.question.spell===1){
        Scolo="red";
        }
        else{
          Scolo="";
        }
        if(this.state.marker===false)
        {
          Mark=<Bookmark/>
        }
        else{Mark=<BookmarkON style={{color:"blue"}}/>}



    const {classes} = this.props;
    return (
      <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="Question" className={classes.avatar}>
            Q
          </Avatar>
        }

/*--------------------------Question is diplayed here-----------------------------*/
         title={this.props.question.q}

         action={
    <Tooltip id="tooltip-bottom" title="Bookmark" placement="bottom">
               <IconButton onClick={this.setBookmark}>
                 {Mark}
               </IconButton>
             </Tooltip>
             }
           />

<CardActions
/*------------------Chips component display(skill ,role difficulty)------------------------*/
  >
<Chip label={this.props.question.role} className={classes.chip} align="right"/>
<Chip label={this.props.question.skill}  className={classes.chip} align="right"/>
<Chip label={this.props.question.difficulty} className={classes.chip} align="right"/>
</CardActions>

<CardActions
  /*-----------------Error grammer and edit Icons here--------------------------------------------------*/
  >
<Tooltip id="tooltip-edit" title="edit" >
  <IconButton aria-label="Text errors"  onClick={this.handleDialogOpen}>
        <Editor className={classes.icon}/>
  </IconButton>
</Tooltip>

<Tooltip id="tooltip-spell" title="Spellings" >
  <IconButton aria-label="Text errors" onClick={this.handleSnackSpellClick} >
   <SpellErr style={{color:Scolo}}/>
  </IconButton>
</Tooltip>
  <Tooltip id="tooltip-redflag" title="errors" >
  <IconButton aria-label="Text errors" onClick={this.handleSnackErrorClick} >
   <Rflag style={{color:Rcolo}} />
  </IconButton>
</Tooltip>

<Snackbar
  /*---------------------------------------This is a Snackbar comp------------------------------------------*/
          className={classes.snackpos}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.snack}
          autoHideDuration={4000}
          onClose={this.handleSnackClose}
          SnackbarContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.Snackvalue}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />

        <Dialog
          /*------------THis is the dialog box comp--------------------------------------------------------------------*/
                  fullScreen
                  open={this.state.Dialog}
                  onClose={this.handleDialogClose}
                  transition={Transition}
                >
                  <AppBar className={classes.appBar}>
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        onClick={this.handleDialogClose}
                        aria-label="Close"
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                      >
                        Edit Question
                      </Typography>
                      <Button color="inherit" onClick={this.handleDialogClose}>
                        save
                      </Button>
                    </Toolbar>
                  </AppBar>
 
                </Dialog>

  <IconButton
    /*-------------------------------------Ansewer button--------------------------------------*/
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Ansewer button"

              >
<typography >Ans</typography>
              </IconButton>
</CardActions>

<Collapse in={this.state.expanded} timeout="auto" unmountOnExit
/*--------------------------------------Ansewers display-----------------------------------*/
  >

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ModeEdit />}>
                  <Typography className={classes.heading}>Basic</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.question.ans[0]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField label="Edit Your ansewer" fullWidth multiline />
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>


              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ModeEdit />}>
                  <Typography className={classes.heading}>Proficient</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.question.ans[1]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField label="Edit Your ansewer" fullWidth multiline/>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>


              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ModeEdit />}>
                  <Typography className={classes.heading}>Intermediate</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.question.ans[2]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField label="Edit Your ansewer" fullWidth multiline/>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ModeEdit />}>
                  <Typography className={classes.heading}>Advanced</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.question.ans[3]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField label="Edit Your ansewer" fullWidth multiline/>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ModeEdit />}>
                  <Typography className={classes.heading}>Expert</Typography>
                  <Typography className={classes.secondaryHeading}>{this.props.question.ans[4]}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <TextField label="Edit Your ansewer" fullWidth multiline/>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">Save</Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

</Collapse>

    </Card>

  );
  }
}

Ques.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ques);
