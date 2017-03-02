import MultipleProducts from '../components/MultipleProducts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const MultipleProductsContainer = connect(
  mapStateToProps
)(MultipleProducts)

export default MultipleProductsContainer
