import React, {useState} from 'react';
import SplashSignupContainer from './session_form/splash_signup_form_container'


class SplashMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {email: ''}
    }

    render(){

        return(
            <div id="splash-main-container">
                <div id="darken-filter">
                    <div id="splash-main-inner-container">
                        <div id="splash-main-text">
                            <h1>Unlimited movies, TV shows, and more, all for your dog.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to start? Enter your email to create your membership.</h3>
                        </div>
                        <div id="splash-main-form">
                            <SplashSignupContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const SplashAd1 = () =>{

    return(
        <div id="splash1-container">
            <div id="splash1-inner-container">
                <div id="splash1-text">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
                <div id='splash1-video-player'>
                    <video 
                        src={window.splashTV}
                        autoPlay
                        loop
                        muted={true}
                    ></video>                    
                    <img id="image1" src={window.netflixTV}/>
                </div>
            </div>
        </div>
    )
}

const SplashAd2 = () => {

    return(
        <div id="splash2-container">
            <div id="splash2-inner-container">
                <img src={window.netflixPhone} id="image2"/>
                <div id="splash2-text">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favorites easily and always have something to watch.</h2>
                </div>
            </div>
        </div>
    )
}

const SplashAd3 = () => {

    return(
        <div id="splash3-container">
            <div id="splash3-inner-container">
                <div id="splash3-text">
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                </div>
                <div id='splash3-video-player'>
                    <video 
                        src={window.splashComputer}
                        autoPlay
                        loop
                        muted={true}
                    ></video>
                    <img id="image3" src={window.netflixComputer}/>
                </div>            
            </div>
        </div>
    )
}



class SplashFAQ extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            div1: false,
            div2: false,
            div3: false,
            div4: false,
            div5: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(container){
        let newState = {
            div1: false,
            div2: false,
            div3: false,
            div4: false,
            div5: false
        };
        let currentState = !this.state[container];
        newState[container] = currentState;
        this.setState(newState);
    }
    

    render(){
        return(
            <div id="splash-faq-container">

                <div id="splash-faq-inner-container">

                    <h1 id="faq-header">Frequently Asked Questions</h1>

                    <div className="dropdown-faq">

                        <div 
                            className="dropdown-div" 
                            id="dropdown-1"
                            id={ this.state.div1 ? "splash-faq-open" : null} >
                            <button 
                                onClick={() => (this.handleClick('div1'))} 
                                id="dropdown-button-1" 
                                className="splash-faq-button">
                                    What is Dogflix?
                                <i className="material-icons">add</i>
                            </button>
                            <div 
                                className="splash-faq-closed">
                                    Dogflix is a streaming service that offers a wide variety 
                                    of award-winning dog-themed and friendly TV shows, movies, anime, 
                                    documentaries, and more on thousands of internet-connected devices.
                                    You can watch as much as you want, whenever you want without 
                                    a single commercial – all for one low monthly price of FREE. 
                                    There's always something new for your dog to discover and new TV 
                                    shows and movies are added every week!
                            </div>
                        </div>

                        <div 
                            className="dropdown-div" 
                            id="dropdown-2"
                            id={ this.state.div2 ? "splash-faq-open" : null} >
                            <button 
                                onClick={() => (this.handleClick('div2'))} 
                                id="dropdown-button-2" 
                                className="splash-faq-button">
                                    How much does Dogflix cost?
                                <i className="material-icons">add</i>
                            </button>

                            <div 
                                className="splash-faq-closed">
                                    Watch Dogflix on your smartphone, tablet, Smart TV, laptop, 
                                or streaming device, Any device that can connect to Heroku.com. 
                                Plans range from free to extra free. No extra costs, no contracts.
                            </div>
                        </div>
                        
                        <div 
                            className="dropdown-div" 
                            id="dropdown-3"
                            id={ this.state.div3 ? "splash-faq-open" : null} >
                            <button 
                                onClick={() => (this.handleClick('div3'))} 
                                id="dropdown-button-3" 
                                className={ this.state.div3 ? "splash-faq-open" : null} 
                                className="splash-faq-button">
                                    Where can I watch?
                                <i className="material-icons">add</i>
                            </button>
                            
                            <div 
                                className="splash-faq-closed">
                                    Watch anywhere, anytime, on an unlimited number of devices. 
                                Sign in with your Dogflix account to watch instantly on the web 
                                at Dogflix.com from your personal computer. Take Dogflix with you 
                                anywhere.
                            </div>
                        </div>
                        
                        <div 
                            className="dropdown-div" 
                            id="dropdown-4"
                            id={ this.state.div4 ? "splash-faq-open" : null} >
                            <button 
                                onClick={() => (this.handleClick('div4'))} 
                                id="dropdown-button-4" 
                                className={ this.state.div4 ? "splash-faq-open" : null} 
                                className="splash-faq-button">
                                    How do I cancel?
                                <i className="material-icons">add</i>
                            </button>
                            
                            <div 
                                className="splash-faq-closed">
                                    Dogflix is flexible. There are no pesky contracts and no commitments
                                since it is free. You cannot cancel your account however, that is mine forever. 
                                There are no cancellation fees – since this is a free service.
                            </div>
                        </div>
                        
                        <div 
                            className="dropdown-div" 
                            id="dropdown-5"
                            id={ this.state.div5 ? "splash-faq-open" : null} >
                            <button 
                                onClick={() => (this.handleClick('div5'))} 
                                id="dropdown-button-5" 
                                className={ this.state.div5 ? "splash-faq-open" : null} 
                                className="splash-faq-button">
                                    What can I watch on Dogflix?
                                <i className="material-icons">add</i>
                            </button>
                            
                            <div 
                                className="splash-faq-closed">
                                    Dogflix has an extensive library of dog friendly feature films, 
                                documentaries, TV shows, anime, award-winning Dogflix originals, 
                                and more. Watch as much as you want, anytime you want.
                            </div>
                        </div>
                    </div>
                    
                    <div id="splash-faq-form">
                        
                        <h3 id="splash-faq-text">
                            Ready to watch? Enter your email to create your membership.
                        </h3>
                        
                        <SplashSignupContainer />

                    </div>
                </div>
            </div>
        )
    }
}

// export class Footer extends React.Component{

//     render(){

//         return(

//             <div id="splash-footer">
//                 {/* <a href='https://github.com/Sethbarrie'><img id="github-image" src={window.githubIconUnfilled} width="166" height="90"/></a>                         */}
//                 <a id="github-image" href='https://github.com/Sethbarrie'></a>                        
//                 <div className="language-dropdown"><i class="material-icons">language</i>  English	<i class="material-icons">expand_less</i>
//                     <div id="hidden-menu">There's just English</div>
//                 </div>
//             </div>
//         )
//     }
// }


export class Footer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {active: false};
        this.toggleClass = this.toggleClass.bind(this);
        this.turnOffMenu = this.turnOffMenu.bind(this);
    }

    toggleClass(){
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }

    turnOffMenu(){
        this.setState({active: false});
    }

    render(){

        return(

            <div id="splash-footer">
                <div className='github-image-container'>
                    <a className="github-image" href='https://github.com/Sethbarrie' target='_blank'>
                        <img src={window.githubIconUnfilled}/>
                    </a>
                    <a className="github-image-filled" href='https://github.com/Sethbarrie' target='_blank'>
                        <img src={window.githubIconFilled}/>
                    </a>
                </div>
                <div className='linkedin-image-container'>
                    <a className="linkedin-image" href="https://www.linkedin.com/in/seth-barrie-0502701bb/" target='_blank'>
                        <img src={window.linkedinIconUnfilled}/>
                    </a>
                    <a className="linkedin-image-filled" href="https://www.linkedin.com/in/seth-barrie-0502701bb/" target='_blank'>
                        <img src={window.linkedinIconFilled}/>
                    </a>
                </div>
                <div 
                    onClick={this.toggleClass}
                    onMouseLeave={this.turnOffMenu} 
                    className="language-dropdown">
                        <i className="material-icons">language</i>
                        English	
                        <i className="material-icons">expand_less</i>
                    <div 
                        className={this.state.active ? 'hidden-menu-clicked' : null} 
                        id="hidden-menu">
                        There's just English
                        {/* Possibly add Duck language, changes all text to quack*/}
                    </div>
                </div>
                
                {/* <img id='rubber-duck' src={window.rubberDuck} onClick={() => alert("quack")}/> */}

            </div>
        )
    }
}

export const Splash = () => (

    <div id="splash-container">
        <SplashMain />
        <SplashAd1 />
        <SplashAd2 />
        <SplashAd3 />
        <SplashFAQ />
        <Footer text={1}/>
    </div>
)
