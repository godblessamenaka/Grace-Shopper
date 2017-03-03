import React, {Component} from 'react'
import NavbarContainer from '../containers/NavbarContainer'

export default class Header extends Component {
  render () {
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
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">My Cart</a></li>
              </ul>
              </ul>
            </div>
          </div>
        <NavbarContainer />
		  </nav>
      {this.props.children}
    </div>
    )
  }
}
