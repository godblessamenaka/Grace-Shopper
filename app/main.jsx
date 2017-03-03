'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {fetchCategories} from './actions/categories'
import {fetchProducts} from './actions/products'
import Jokes from './components/Jokes'
import Header from './components/Header'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import MultipleProductsContainer from './containers/MultipleProductsContainer'

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
      <Route path="/" component={Header} onEnter={onAppEnter} >
        <Route path="/products" component={MultipleProductsContainer} />
        <Route path="/products/:productId" component={MultipleProductsContainer} />
        <Route path="/cart" component={Header} />
        <Route path="/register" component={Header} />
        <Route path="/signup" component={Header} />
        <Route path="/user/:userId" component={Header} />
        <Route path="/adminpanel" component={Header} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
