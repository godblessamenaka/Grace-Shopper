'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {fetchCategories} from './actions/categories'
import {fetchProducts} from './actions/products'
import Jokes from './components/Jokes'
import App from './components/App'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import MultipleProductsContainer from './containers/MultipleProductsContainer'
import LandingPageContainer from './containers/LandingPageContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {children}
    </div>
)

const onAppEnter = function(){
    fetchCategories()(store.dispatch)
    fetchProducts()(store.dispatch)
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter} >
        <Route path="/home" component={LandingPageContainer} />
        <Route path="/products" component={MultipleProductsContainer} />
        <Route path="/products/:productId" component={MultipleProductsContainer} />
        <Route path="/cart" component={Jokes} />
        <Route path="/register" component={Jokes} />
        <Route path="/signup" component={Jokes} />
        <Route path="/user/:userId" component={Jokes} />
        <Route path="/adminpanel" component={Jokes} />
        <IndexRedirect to="/home" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
