import React, {useState, useEffect} from 'react';
import useDebounced from '../../util/useDebounce';
import {Link} from 'react-router-dom';
import {emptyObject} from '../../util/helper';


const NavBarHooks = ({user = {}, postSession, deleteSession, updateAutoplay, history, location}) => {

    const [ hovering, setHovering ] = useState( false );
    const debounceHover = useDebounced( hovering, 50, 500);

    function demoSignin(){
        postSession({
            username: "demouser", 
            password: "demouserpassword", 
            email: "demouser@demouser.com"
        });
        return history.push('/browse');
    }

    const LargerDogflixLogo = (
        <Link to='/'>
            <img id='website-logo' src={window.netflixLogo} width='166' height='90'/>
        </Link>
    )

    const smallerDogflixLogo = (
        <Link to='/'>
            <img id='website-logo' src={window.netflixLogo} width='115' height='55'/>
        </Link>
    )

    const profileDropdown = (
        <div
            id='signedin-navbar-dropdown'
            onMouseEnter={() => setHovering( true )}
            onMouseLeave={ () => setHovering( false)}    
        >
            <img src={window.profilePicture} width='40' height='40' id='profile-picture'/>
            <i className="material-icons">arrow_drop_down
                <div
                    id={debounceHover ? 'signedin-navbar-dropdown-displayed' : 'signedin-navbar-dropdown-hidden'}
                >
                    <button
                        className='button'
                        id='signout-button'
                        onClick={deleteSession}
                    >
                        Sign out
                    </button>
                    <button
                        className='button'
                        id='autoplay-button'
                        onClick={
                            () => {
                                if(emptyObject(user)){
                                    updateAutoplay({...user, autoplay: !user.autoplay})
                                }
                            }
                        }
                    >
                        {user.autoplay ? 'Turn off Autoplay' : 'Turn on Autoplay'}
                    </button>
                </div>
            </i>
        </div>
    )

    const signinButton = (
        <button className='button' id='signin-button' onClick={() => history.push('signin')}>Sign in</button>
    )

    const demoSigninButton = (
        <button className='button' id='demo-user-button' onClick={demoSignin}>Demo Sign in</button>
    )

    if(emptyObject(user)){
        return(
            <header className='navbar'>
                {location.pathname.includes('/player/') ? LargerDogflixLogo : smallerDogflixLogo}
                {profileDropdown}
            </header>
        )
    }
    return(
        <header className='navbar'>
            {LargerDogflixLogo}
            {location.pathname.includes('/signup') ? {signinButton} : null}
            {location.pathname.includes('/signin') ? <div id='spacer-div'></div> : {demoSigninButton}}
        </header>
    )
}

export default NavBarHooks