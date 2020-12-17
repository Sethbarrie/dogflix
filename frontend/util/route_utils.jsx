import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    signedIn: Boolean(state.session.currentUser)
});



const Auth = ({ signedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            signedIn ? <Redirect to="/browse" /> : <Component {...props} />
        )}
    />
);


const Protected = ({ signedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            signedIn ? <Component {...props}/> : <Redirect to='/'/> 
        )}
    />
)


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
