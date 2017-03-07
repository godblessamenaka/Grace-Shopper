import Login from '../components/Login';
import { connect } from 'react-redux';
import { addUser } from '../actions/users'
import {login} from '../reducers/auth'

const mapStateToProps = (state) => {
  return {
    selectedUser: state.users.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: function (credentials) {
      dispatch(login(credentials));
    }
  };
};


const LoginContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Login);

export default LoginContainer;
