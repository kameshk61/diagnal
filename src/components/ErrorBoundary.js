import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }   
    render() {
        if(this.state.hasError){
            return <img alt="" src={require('../slices/placeholder_for_missing_posters.png')} />
        }
        
        return this.props.children
    }
}

export default ErrorBoundary
