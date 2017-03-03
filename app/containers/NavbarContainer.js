import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    categories: state.categories.allCategories
  }
}

export default connect(mapStateToProps)(Navbar);
