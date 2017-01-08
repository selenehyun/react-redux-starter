import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
// import Dashboard from './containers/dashboard';
// import ProductTable from './containers/product-table';
import { Dashboard, ProductTable, GoogleMap } from './containers';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/products" component={ProductTable} />
        <Route path="/map" component={GoogleMap} />
    </Route>
)

