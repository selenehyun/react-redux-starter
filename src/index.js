import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducer from './reducers';

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';

const store = createStore(reducer, {}, applyMiddleware(logger(), thunk));
const history = syncHistoryWithStore(browserHistory, store)
render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>, 
    document.getElementById('app'));

history.listen(location => {
    if(store.getState().ui.sidebarOn) {
        store.dispatch({
            type: 'SIDEBAR_ON_OFF'
        })
    }
})