import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss';
import 'semantic-ui-css/semantic.min.css'

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
