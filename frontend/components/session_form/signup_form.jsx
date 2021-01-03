import React from 'react';
import {Footer} from '../splash'
import ErrorsContainer from '../errors/errors_container'

class SignupForm extends React.Component{
    
    constructor(props){
        super(props)
        if(this.props.location.state === undefined)
            {this.state = {username: '', email: '', password: ''}
        } else {
            this.state = this.props.location.state.user
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.clearErrors()
        this.props.action(this.state)
    }

    handleSubmitDemo(e){
        e.preventDefault();
        this.props.clearErrors()
        this.props.demoAction({
            username: "demouser", 
            password: "demouserpassword", 
            email: "demouser@demouser.com"
        })
    }

    update(type){
        return e => {
            if(this.props.errors.length !== 0){
                this.props.clearErrors()
            };
            this.setState({ [type]: e.currentTarget.value})

        }
    }

    render(){

        return(
            <div className="signup-container">
                
                <h1 id="form-header">{this.props.formType}</h1>
                <ErrorsContainer />
                <div id='signup-form-container'>
                    <form className="form" id="signup-form" onSubmit={this.handleSubmit}>
                        <div id="signup-form-header">
                            <h3> step 1 of 1. Yay!</h3>
                            <h1>Create a Username and password to start your membership.</h1>
                            <h2>Just a few more keystrokes and you're done! We hate paperwork, too.</h2>
                        </div>
                        <div id="signup-email-label">
                            <input type="text" 
                            id="signup-email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.update('email')}/>
                        </div>

                        <div id="signup-username-label">
                            <input type="text"  
                            id="signup-username"
                            placeholder="Enter Username"
                            onChange={this.update('username')}/>
                        </div>
    
                        <div id="signup-password-label">
                            <input type="password"  
                            id="signup-password"
                            placeholder="Enter password"                        
                            onChange={this.update('password')}/>
                        </div>

                        <button className="button" id="signup-submit-button">SIGN UP</button>

                    </form>

                    <form id="signup-demo-user-form" onSubmit={this.handleSubmitDemo}>
                        <h1>Not sure yet? Try as a demo user for free!</h1>
                        <button className="button" id="demo-user-submit-button">Try for free as a Demo</button>
                    </form>
                </div>
                <Footer text={1}/>
            </div>
        )
    }



};

export default SignupForm;