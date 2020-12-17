import React from 'react';
import {AuthRoute} from '../../util/route_utils';
import {Render} from 'react-router-dom'

class SplashSignupForm extends React.Component{

        
        constructor(props){
            super(props);
            this.state = {
                email: '',
                errors: ''
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.emailVerified = this.emailVerified.bind(this);
        }
    
        handleSubmit(e){
            e.preventDefault();
            this.props.clearErrors();
            if(!this.emailVerified()){
                return;
            }
            if(this.props.currentUser === undefined){
                let newUser = this.props.user;
                newUser.email = this.state.email;
                this.props.history.push({pathname: '/signup', state: {user: newUser}})
            } else {
                this.props.history.push('/browse');
            }
        }
    
        emailVerified(){
            if(!this.state.email){
                this.setState({ errors: 'Email is required!'})
                return false;
            }
            let email = this.state.email.split('');
            let emailAtSymbol = email.indexOf('@');
            let emailPeriodSymbol = email.indexOf('.');

            if(emailAtSymbol === -1 || emailPeriodSymbol === -1 || emailAtSymbol > emailPeriodSymbol){
                this.setState({ errors: 'Please enter a valid email address'});
                return false;
            }
            return true;
        }

        update(type){
            return e => {
                this.props.clearErrors();
                this.setState({ email: e.currentTarget.value, errors: ''});
            }
        }
    
        //Set up the input as position relative, then create an element
        //with the position absolute, then set up an event handler where
        //when you click the element or the container, it shifts the 
        //element up and allows the input field to display
        render(){
            return(
                <div>
                    <form className="form"  id="entry-email-form" onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text"
                            className={ this.state.errors ? 'splash-errors-present' : null} 
                            id="entry-email"
                            placeholder="Email address"
                            onChange={this.update('email')}/>
                        </label>
                        <button className="button" id="entry-form-button">{`Get Started >`}</button>
                    </form> 
                    <div className='splash-signup-form-errors' id={this.state.errors ? 'splash-signup-form-errors-present' : null}>{this.state.errors}</div>
                </div>
            )
        }
    
    }
    

export default SplashSignupForm;