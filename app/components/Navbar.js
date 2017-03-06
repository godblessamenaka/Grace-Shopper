import React, {Component} from 'react'
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {fullWhite} from 'material-ui/styles/colors';

const buttonStyle = {
  marginRight: '10px',
  marginBottom: '0px'
}

const listStyle = {
  margin: 'auto'
}

export default class Navbar extends Component {
  render () {
    console.log(this.props)
    const categories = this.props.categories;
    return (
      <nav className ="">
        <Toolbar style={{height: '75px'}}>
          <ToolbarGroup style={listStyle}>
            <div className ="container-fluid" >
              <ul className="nav navbar-nav">
                <RaisedButton
                  style={buttonStyle}
                  primary={true}
                  labelColor="#a4c639">
                  <Link to="/products">All</Link>
                </RaisedButton>
              {categories && categories.map((category) => {
                return (
                  <RaisedButton
                    style={buttonStyle}
                    key={category.id}
                    secondary={true}
                    labelColor="white"
                  >
                    <Link to="#">
                      {category.name}
                    </Link>
                  </RaisedButton>
                )
              })}
              </ul>
            </div>
          </ToolbarGroup>
        </Toolbar>
      </nav>
    )
  }
}
