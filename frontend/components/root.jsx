import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom'
import App from './app'
import React from 'react';

// Cannot use store as the prop name, need to destructure it
const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root;