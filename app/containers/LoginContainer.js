import Login from '../components/Login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedUser: state.users.selected
  };
};

const LoginContainer = connect(
  mapStateToProps
)(Login);

export default LoginContainer;
