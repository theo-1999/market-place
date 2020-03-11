import React from 'react';
import { isLogged } from "./App";
import { withAutorization } from "./autorization";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
class Home extends React.Component{
    
    handleSubmit3 =()=>{
        this.props.toLogout();
        this.props.history.push("/");
    } 
    
    render (){
       
       if(this.props.isLogged == true){
            return(
                <div>  
                    <h2>Salut bro !</h2> 
                    <Button variant="contained" color="primary" onClick={this.handleSubmit3}>Se Déconnecter</Button>
                </div>
            )
        }
        else{
            return(<h2>hey ! </h2>)   
        }
    }
}

export default  withRouter(withAutorization(Home)); 