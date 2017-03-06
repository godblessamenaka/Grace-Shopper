import SingleProductsPage from '../components/SingleProductsPage'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.allProducts.find(product => product.id === +ownProps.params.id),
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  }
}

const SingleProductsPageContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SingleProductsPage)

export default SingleProductsPageContainer
