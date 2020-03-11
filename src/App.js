import React from 'react';
import Component from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter, 
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Navigation from './navigation';
import Home from './home';
import SignIn from './signin';
import {AutorizationProvider, withAutorization} from './autorization';
import { auth } from './autorization';
import SignUp from './signup';


const SignIn2 = withAutorization(SignIn)
const SignIn3 = withRouter(SignIn)

    class App extends React.Component{
      
      
        
       
      render(){
          
            return(
              <AutorizationProvider>
                  <BrowserRouter>

                      <Navigation/>
                        <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route  path="/signin">
                      
                          <SignIn/>
                                                    
                          

                      </Route>
                      
                      <Route  path="/signup">
                      
                          <SignUp/>
                      </Route>
                      
                      </Switch>
              </BrowserRouter>
                </AutorizationProvider>
              )
              
        }
    }

export default App;
