import React from 'react'
import SingleProductsPage from '../components/SingleProductsPage'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.allProducts.find(product => product.id === +ownProps.params.productId),
    reviews: state.reviews.filter(review => review.product_id === +ownProps.params.productId)
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

class SingleProductsPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  handleQuantityChange(event, index, value) {
    this.setState({quantity: value})
  }
  render(){
    return (
      <SingleProductsPage
      {...this.state}
      {...this.props}
      handleQuantityChange={this.handleQuantityChange} />
    );
  }

}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SingleProductsPageContainer)
