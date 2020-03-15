import React from 'react';
import { isLogged } from "./App";
import { withAutorization } from "./autorization";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
class Home extends React.Component{
    state = {
        article : 0  ,
        
        addarticle : () => this.setState({article :this.state.article +1 })
    }
    handleSubmit3 =()=>{
        this.props.toLogout();
        this.props.history.push("/");
    }
    
    handleSubmit4 =() =>{
         this.state.addarticle()
         console.log (this.state)
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
            return(<div><h2>hey ! </h2>
             
             <Card>   
              <CardActionArea>
                <CardMedia
                  
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={this.handleSubmit4}>
                  Ajouter au panier
                </Button>
             
              </CardActions>
            </Card>
            </div>)   
        }
        
        
     
    }
}

export default  withRouter(withAutorization(Home)); 