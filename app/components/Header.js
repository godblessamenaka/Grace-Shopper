import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import NavbarContainer from '../containers/NavbarContainer'
import {Link} from 'react-router';

const logo = '/images/logo/alchemetsy-logo.png';

const Header = () => {
  return (
    <div>
        <nav className ="navbar navbar-default" style={{backgroundColor: '#262532'}}>
          <div className ="container-fluid">
            <div className="navbar-header">
              <Link to={'/home'} className="navbar-brand" href="#"><img src = {logo} /></Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><LoginContainer /></li>
              </ul>
            </div>
          </div>
        <NavbarContainer />
		  </nav>
    </div>
  )
}

export default Header
