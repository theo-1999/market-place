import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import purple from '@material-ui/core/colors/purple';
    

 const useStyles = (theme => ({
  root: {
    flexGrow: 1,
    color : purple[800],
  }
  })); 
  


  
const color = purple[800];  


class Navigation extends React.Component{
  
  
  
  
  
  render(){
  const { classes } = useStyles();
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >The Marketplace </Typography>
          
          
      
        <Link to = "/" color="inherit"><Button  className={classes}>Home</Button></Link>
        <Link to = "/signin"><Button color="inherit">Sign In</Button></Link>
        <Link to = "/signup"><Button color="inherit">Sign Up</Button></Link>
       
      </Toolbar>
    </AppBar>
    )
  }
}

export default withStyles(useStyles)(Navigation) ;