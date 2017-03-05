import React, {Component} from 'react'
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
        <Toolbar>
          <ToolbarGroup style={listStyle}>
            <div className ="container-fluid" >
              <ul className="nav navbar-nav">
                <RaisedButton style={buttonStyle}><Link to="/products">All</Link></RaisedButton>
              {categories && categories.map((category) => {
                return <RaisedButton style={buttonStyle} key={category.id}><Link to="#">{category.name}</Link></RaisedButton>
              })}
              </ul>
            </div>
          </ToolbarGroup>
        </Toolbar>
      </nav>
    )
  }
}
