import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import ReactGA from 'react-ga';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore()
    
    if(process.env.NODE_ENV !== "production"){
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    } else {
        ReactGA.initialize(process.env.GOOGLE_ANALYTIC_KEY);
        ReactGA.pageview('/');
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(< Root store={store} />, root)
})