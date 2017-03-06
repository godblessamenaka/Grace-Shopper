import LandingPage from '../components/LandingPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts
  }
}

export default connect(
  mapStateToProps
)(LandingPage)
