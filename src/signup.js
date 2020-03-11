import React from 'react';
import { withAutorization } from './autorization.js';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class SignUp extends React.Component {
    
    
    state = { email : "",
              password : "",
              username : ""
            }
            
    handleSubmit =()=>{
       
        this.props.toLogIn();
        this.props.history.push("/");
        console.log("sa marche")
     
    }        
            
            
    
    
    
    
    
    render(){
        return(
            <Grid container spacing={3} justify="center" direction="column" alignItems="center">
                <Grid item xs>
                    <TextField id="outlined-basic" label="Nom d'utilisateur" variant="outlined" type="text" name="username" onChange={this.handleInput}/>
                </Grid>
                <Grid item xs>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="text" name="email" onChange={this.handleInput}/>
                </Grid>
                <Grid item xs>
                    <TextField id="outlined-basic" label="Mot de passe" variant="outlined" type="password" name="password" onChange={this.handleInput}/>
                </Grid>
                <Grid item xs>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Valider</Button>
                </Grid>
            </Grid>
            )
    }
    
}

export default withRouter(withAutorization(SignUp))