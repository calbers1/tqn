import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import reducers from './reducers';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducers, {}, 
    applyMiddleware(ReduxThunk)
);

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

// Service worker
serviceWorker.unregister();
