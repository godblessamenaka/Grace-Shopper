import Reviews from '../components/Reviews';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	console.log(state);
  return {
    reviews: state.reviews
  }
}

const ReviewsContainer = connect(
  mapStateToProps
)(Reviews)

export default ReviewsContainer
