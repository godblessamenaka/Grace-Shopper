'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {fetchCategories} from './actions/categories'
import {fetchProducts} from './actions/products'
import {fetchReviews} from './actions/reviews'
import {fetchOrdersByUser} from './actions/orders'

import App from './components/App'
import Login from './components/Login'
import ReviewsContainer from './containers/ReviewsContainer'
import WhoAmI from './components/WhoAmI'
import Header from './components/Header'
import MultipleProductsContainer from './containers/MultipleProductsContainer'
import LandingPageContainer from './containers/LandingPageContainer'
import SingleProductsPage from './components/SingleProductsPage'
import OrdersPageContainer from './containers/OrdersPageContainer'

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
    fetchReviews()(store.dispatch)
};

const onUserAccountEnter = function(nextRouterState){
    console.log(nextRouterState.params.userId)
    fetchOrdersByUser(nextRouterState.params.userId)(store.dispatch)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter} >
        <Route path="/home" component={LandingPageContainer} />
        <Route path="/products" component={MultipleProductsContainer} />
        <Route path="/products/:productId" component={MultipleProductsContainer} />
        <Route path="/cart" component={Header} />
        <Route path="/register" component={Header} />
        <Route path="/signup" component={Header} />
        <Route path="/user/:userId" component={Header} />
        <Route path="/user/:userId/account" component={OrdersPageContainer} onEnter={onUserAccountEnter} />
        <Route path="/adminpanel" component={Header} />
        <Route path="/reviews" component={ReviewsContainer} />
        <IndexRedirect to="/home" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
