import React from 'react';
import {Redirect} from 'react-router-dom'


class ErrorPage extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='error-page-container'>
                
                <h1 id='error-page-header'>Lost your way?</h1>
                    
                <div id='error-page-message-container'>
                    <span 
                        id='error-page-message'>
                            Sorry, we can't find that page. 
                            You'll find lots to explore on 
                            the home page.
                    </span>

                    <button 
                        className='button' 
                        id='error-page-redirect-button' 
                        onClick={() => this.props.history.replace('/browse')}>
                            Dogflix Home
                    </button>

                    <span id='error-page-bottom-error-message'>Error Code <span id='error-page-bottom-error-code'>DSES-404</span></span>
                </div>
            </div>
        )
    }
};

export default ErrorPage;