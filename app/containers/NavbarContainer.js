import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import {fetchCategory} from '../actions/categories'

const mapStateToProps = (state) => {
  return {
    categories: state.categories.allCategories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: function(catId){
      dispatch(fetchCategory(catId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
