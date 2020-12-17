import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import { 
    AuthRoute, 
    ProtectedRoute
} from '../util/route_utils';

import SigninFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import NavBarContainer from './nav_bar/nav_bar_container';
import ErrorPageContainer from './errors/error_page_container';


import {Splash} from './splash';
import BrowseContainer from './browse/browse_container';
import MoviePlayerContainer from './movies/containers/movie_player_container';



class App extends React.Component{


    
    render(){    
        return(    
            <div id="root-div">
                <NavBarContainer />    
                <Switch>

                    <AuthRoute exact path='/' component={Splash} />

                    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
                    <AuthRoute exact path='/signin' component={SigninFormContainer}/>

                    <ProtectedRoute path='/browse' component={BrowseContainer}/>

                    <ProtectedRoute path='/player/:movieId' component={MoviePlayerContainer}/>
                    
                    <Route exact path='/page-not-found-404' component={ErrorPageContainer}/> 
                    <Route path='*'>{<Redirect to='/page-not-found-404'/>}</Route>
                </Switch>  
            
            </div>
        )
    }
}

export default App;