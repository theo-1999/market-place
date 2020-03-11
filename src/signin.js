import React from 'react';
import { withRouter } from 'react-router-dom';
import { withAutorization } from './autorization.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class SignIn extends React.Component {
    
    state = { email : "",
              password : "",
              username : ""
            }
    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        console.log("yo !")
    }


    handleSubmit =()=>{
        if (this.state.email == "toto@gmail.com" || this.state.username == "fg" && this.state.password == "pass"){
        this.props.toLogin();
        this.props.history.push("/");
        console.log("sa marche")
        } else {
            this.props.history.push("/signin")
        }
    }
    
    handleSubmit2 =()=>{
        this.props.history.push("/signup")
    }
    
    handleSubmit3 =()=>{
        this.props.toLogout();
        this.props.history.push("/");
    }


render(){
    console.log("SignIn props", this.props)
    return(
    <Grid container spacing={3} justify="center" direction="column" alignItems="center">
        <Grid item xs>
            <TextField id="outlined-basic" label="Email" variant="outlined" type="text" name="email" onChange={this.handleInput}/>
        </Grid>
        <Grid item xs>
            <TextField id="outlined-basic" label="Mot de passe" variant="outlined" type="password" name="password" onChange={this.handleInput}/>
        </Grid>
       
        <Grid item xs>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Se Connecter</Button>
        </Grid>
        <Grid item xs>
            <Button variant="contained" color="primary" onClick={this.handleSubmit2}>Créer un compte</Button>
        </Grid>
        <Grid item xs>
            <Button variant="contained" color="primary" onClick={this.handleSubmit3}>Se Déconnecter</Button>
        </Grid>
        
    </Grid>
    );
    
}
}
export default withRouter(withAutorization(SignIn));