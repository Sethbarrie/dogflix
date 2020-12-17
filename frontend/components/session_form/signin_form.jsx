import React from 'react';
import {Footer} from '../splash';
import ErrorsContainer from '../errors/errors_container';
import {Link} from 'react-router-dom';
class SigninForm extends React.Component{

    componentDidMount(){
        this.props.clearErrors()
    }

    constructor(props){
        super(props)
        this.state = this.props.user
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
            
            <div className="signin-container">
                <div id="background-img">
                    <div id="darken-filter"></div>
                        <div id='signin-spacing-div-top'></div>
                        <div id="form-container">
                            <div id='signin-header-and-errors'>
                                <h1 id="form-header">{this.props.formType}</h1>
                                <ErrorsContainer />

                            </div>
                            <form className="form" id="signin-form" onSubmit={this.handleSubmit}>
                

                                <div>
                                    <input type="text" 
                                    id="signin-email"
                                    placeholder="Enter email"
                                    onChange={this.update('email')}/>
                                </div>
            
                                <div>
                                    <input type="password" 
                                    id="signin-password"
                                    placeholder="Enter password"                        
                                    onChange={this.update('password')}/>
                                </div>

                                <button className="button" id="signin-submit-button">{this.props.formType}</button>

                            </form>
                            
                            <form className="form" id="demo-user-form" onSubmit={this.handleSubmitDemo}>
                                <button className="button" id="demo-user-submit-button">Try for free as a Demo</button>
                            </form>
                            <div className='redirect-to-splash'>
                                <span>New to Dogflix? </span>
                                <Link to='/'>Sign up now.</Link>
                            </div>
                        </div>
                        <div id='signin-spacing-div-bottom'></div>
                        <Footer text={1}/>
                    </div>
                
            </div>
        )
    }

}

export default SigninForm;