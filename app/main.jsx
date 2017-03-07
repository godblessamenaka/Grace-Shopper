'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {fetchCategories} from './actions/categories'
import {fetchProducts} from './actions/products'
import {fetchReviews} from './actions/reviews'

import App from './components/App'
import Login from './components/Login'
import ReviewsContainer from './containers/ReviewsContainer'
import WhoAmI from './components/WhoAmI'
import Header from './components/Header'
import MultipleProductsContainer from './containers/MultipleProductsContainer'
import LandingPageContainer from './containers/LandingPageContainer'
import CartPageContainer from './containers/CartPageContainer'
import SingleProductsPageContainer from './containers/SingleProductsPageContainer'

//material ui fix for tap events
import injectTapEventPlugin from 'react-tap-event-plugin'


/*const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {children}
    </div>
)*/

const onAppEnter = function(){
    fetchCategories()(store.dispatch)
    fetchProducts()(store.dispatch)
    fetchReviews()(store.dispatch)
};

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter} >
        <Route path="/home" component={LandingPageContainer} />
        <Route path="/products" component={MultipleProductsContainer} />
        <Route path="/cart" component={CartPageContainer} />
        <Route path="/products/:productId" component={SingleProductsPageContainer} />
        <Route path="/register" component={Header} />
        <Route path="/signup" component={Header} />
        <Route path="/user/:userId" component={Header} />
        <Route path="/adminpanel" component={Header} />
        <Route path="/reviews" component={ReviewsContainer} />
        <IndexRedirect to="/home" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
