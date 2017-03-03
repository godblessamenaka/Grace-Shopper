import MultipleProducts from '../components/MultipleProducts'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts
  }
}

const MultipleProductsContainer = connect(
  mapStateToProps
)(MultipleProducts)

export default MultipleProductsContainer
