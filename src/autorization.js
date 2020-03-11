import React from 'react';




    
export const AutorizationContext = React.createContext(null);

export class AutorizationProvider extends React.Component {
    state = {
     isLogged : false, 
     toLogin : () => this.setState({isLogged:  true}),
     toLogout : () => this.setState({isLogged : false})
    
    }
    
    
    render () {
        return(
            <AutorizationContext.Provider value= {this.state}>
             { this.props.children }
            </AutorizationContext.Provider>
            )
    }
    
}
    
export const withAutorization = (Component)=>{
        
    class NewComponent extends React.Component{
            render () {
                return (
                    <AutorizationContext.Consumer>
                        {value => <Component {... value} {...this.props}/>}
                    </AutorizationContext.Consumer>
                    )
            }
    }
    
    
        
        return NewComponent;
        
}
    
