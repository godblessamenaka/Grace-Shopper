import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import LoginContainer from '../containers/LoginContainer'
import NavbarContainer from '../containers/NavbarContainer'

const buttonStyle = {
  margin: 12,
};


const Header = () => {
  return (
    <div>
        <nav className ="navbar navbar-default">
          <div className ="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Alchemetsy</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
              <ul className="nav navbar-nav navbar-right">
                <li><LoginContainer /></li>
                <li><RaisedButton label="Cart" style={buttonStyle} /></li>
              </ul>
              </ul>
            </div>
          </div>
        <NavbarContainer />
		  </nav>
    </div>
  )
}

export default Header
