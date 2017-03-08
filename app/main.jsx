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
import OrdersPageContainer from './containers/OrdersPageContainer'
import CartPageContainer from './containers/CartPageContainer'
import SingleProductsPageContainer from './containers/SingleProductsPageContainer'

//material ui
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({palette: {
    primary1Color: '#891548',
    primary2Color: '#5f1d3c',
    primary3Color: '#515062',
    accent1Color: '#891548',
    accent2Color: '#515062',
    accent3Color: '#515062',
    textColor: '#f5f5f5',
    alternateTextColor: '#f5f5f5',
    canvasColor: '#262532',
    borderColor: '#515062'
  }
})





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


const onUserAccountEnter = function(nextRouterState){
    fetchOrdersByUser(nextRouterState.params.userId)(store.dispatch)
}

//material ui fix for tap events
injectTapEventPlugin();


render(
  <MuiThemeProvider muiTheme={muiTheme}>
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
        <Route path="/user/:userId/account" component={OrdersPageContainer} onEnter={onUserAccountEnter} />
        <Route path="/adminpanel" component={Header} />
        <Route path="/reviews" component={ReviewsContainer} />
        <IndexRedirect to="/home" />
      </Route>
    </Router>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
