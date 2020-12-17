import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            hovering: false,
            topOfPage: true
        }
        this.demoSignin = this.demoSignin.bind(this);
        this.setHovering = this.setHovering.bind(this);
    }

    demoSignin(e){
        e.preventDefault()
        this.props.postSession({
            username: "demouser", 
            password: "demouserpassword", 
            email: "demouser@demouser.com"
        });
        return this.props.history.push("/browse");      
    }


    setHovering(value){
        let handler
        if(!value){
            handler = setTimeout( () => {
                return this.setState({ hovering: value})
            }, 500)
        } else {
            clearTimeout(handler);
            return this.setState({ hovering: value})
        }
    }

    render(){

        if(this.props.user !== undefined  && this.props.location.pathname.includes( "/player/")){

            return(
                
                <header
                    onScroll={this.scrolledChange} 
                    id="signedin-movie-player-navbar" 
                    // id={this.state.topOfPage ? '' : 'dark-signed-in-navbar'}
                    className="navbar" >
                    
                    <Link 
                        to='/'>
                            <img 
                                id="website-logo" 
                                src={window.netflixLogo} 
                                width="166" 
                                height="90"/>
                    </Link>
                    
                    <div 
                        onMouseEnter={() => this.setHovering(true)}
                        onMouseLeave={() => this.setHovering(false)}
                        id="signedin-navbar-dropdown">
                            <img 
                                src={window.profilePicture} 
                                width='40px' 
                                height='40px' 
                                id='profile-picture'/>
                            <i className="material-icons">arrow_drop_down
                                <div 
                                    id={ this.state.hovering ?
                                        'signedin-navbar-dropdown-displayed':
                                        'signedin-navbar-dropdown-hidden'
                                    }>
                                        <button 
                                            className="button" 
                                            id="signout-button" 
                                            onClick={this.props.deleteSession}>
                                                Sign out
                                        </button>
                                        <button
                                            className='button'
                                            id='autoplay-button'
                                            onClick={
                                                    () => {this.props.updateAutoplay 
                                                        (Object.assign( 
                                                            {}, this.props.user, 
                                                            {autoplay: !this.props.user.autoplay
                                                    }))}}>
                                            {this.props.user.autoplay ?
                                            'Turn off Autoplay' : 
                                            'Turn on Autoplay'
                                            }
                                        </button>
                                </div>
                            </i>
                    </div>
                </header>
            )} else if(this.props.user !== undefined){

                return(
                
                    <header
                        onScroll={this.scrolledChange} 
                        id="signedin-navbar" 
                        // id={this.state.topOfPage ? '' : 'dark-signed-in-navbar'}
                        className="navbar" >
                        
                        <Link 
                            to='/'>
                                <img 
                                    id="website-logo" 
                                    src={window.netflixLogo} 
                                    width="126" 
                                    height="65"/>
                        </Link>
                        
                        <div 
                        onMouseEnter={() => this.setHovering(true)}
                        onMouseLeave={() => this.setHovering(false)}
                            id="signedin-navbar-dropdown">
                                <img 
                                    src={window.profilePicture} 
                                    width='40px' 
                                    height='40px' 
                                    id='profile-picture'/>
                                <i className="material-icons">arrow_drop_down
                                    <div 
                                        id={ this.state.hovering ?
                                            'signedin-navbar-dropdown-displayed':
                                            'signedin-navbar-dropdown-hidden'
                                        }>
                                            <button 
                                                className="button" 
                                                id="signout-button" 
                                                onClick={this.props.deleteSession}>
                                                    Sign out
                                            </button>
                                            <button
                                                className='button'
                                                id='autoplay-button'
                                                onClick={
                                                        () => {this.props.updateAutoplay 
                                                            (Object.assign( 
                                                                {}, this.props.user, 
                                                                {autoplay: !this.props.user.autoplay
                                                        }))}}>
                                                {this.props.user.autoplay ?
                                                'Turn off Autoplay' : 
                                                'Turn on Autoplay'
                                                }
                                            </button>
                                    </div>
                                </i>
                        </div>
                    </header>
                )
        } else  if(this.props.user === undefined && this.props.location.pathname === "/signin"){
            return(

                <header className="navbar" id="signedout-navbar-signin-url">
                    <Link to='/'><img id="website-logo" src={window.netflixLogo} width="166" height="90"/></Link>
                    <div id="spacer-div"></div>                        
                </header>

            )
        } else  if(this.props.user === undefined && this.props.location.pathname === "/signup"){
            return(

                <header className="navbar" id="signedout-navbar-signup-url">
                    <Link to='/'><img id="website-logo" src={window.netflixLogo} width="166" height="90"/></Link>
                    <button className="button" id="signin-button" onClick={() => this.props.history.push('/signin')}>Sign in</button>
                </header>

            )
        } else if(this.props.location.pathname === '/page-not-found-404'){
            return(
                <header className="navbar" id="error-navbar">
                    <Link to='/'><img id="website-logo" src={window.netflixLogo} width="166" height="90"/></Link>
                </header>

            )
        } else {
            return(
                
                <header className="navbar" id="signedout-navbar">
                    <Link to='/'><img id="website-logo" src={window.netflixLogo} width="166" height="90"/></Link>                        
                    <div id="button-div">
                        <button className="button" id="signin-button" onClick={() => this.props.history.push('/signin')}>Sign in</button>
                        <button className="button" id="demo-user-button" onClick={this.demoSignin}>Demo</button>
                    </div>
                </header>
            )
        }
    }
}    

export default NavBar;