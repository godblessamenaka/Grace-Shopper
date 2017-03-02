import React, {Component} from 'react'

export default class Navbar extends Component {
  render (props) {
    return (
        <nav className ="navbar navbar-default">
          <div className ="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#">Love</a></li>
                <li><a href="#">Luck</a></li>
                <li><a href="#">Etc.</a></li>
              </ul>
            </div>
          </div>
    </nav>
    )
  }
}
