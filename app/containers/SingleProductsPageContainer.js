import React from 'react'
import SingleProductsPage from '../components/SingleProductsPage'
import { connect } from 'react-redux';
import {addItemToCart} from '../actions/cart'
import {browserHistory} from 'react-router'

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.allProducts.find(product => product.id === +ownProps.params.productId),
    reviews: state.reviews.filter(review => review.product_id === +ownProps.params.productId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddtoCart(item){
      dispatch(addItemToCart(item))
    }
  }
}

class SingleProductsPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: null
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleAddtoCart = this.handleAddtoCart.bind(this)
  }

  handleQuantityChange(event, index, value) {
    this.setState({quantity: value})
  }

  handleAddtoCart() {
    const item = Object.assign({quantity: this.state.quantity}, this.props.product)
    this.props.handleAddtoCart(item)
    browserHistory.push('/cart')
  }

  render(){
    return (
      <SingleProductsPage
      {...this.state}
      {...this.props}
      handleQuantityChange={this.handleQuantityChange}
      handleAddtoCart={this.handleAddtoCart}
      />
    );
  }

}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SingleProductsPageContainer)
