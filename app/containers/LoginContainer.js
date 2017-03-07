import Login from '../components/Login';
import { connect } from 'react-redux';
import { addUser } from '../actions/users'

const mapStateToProps = (state) => {
  return {
    selectedUser: state.users.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: function (credentials) {
      dispatch(addUser(credentials));
    }
  };
};


const LoginContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Login);

export default LoginContainer;
