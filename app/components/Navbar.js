import React, {Component} from 'react'
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const style = {
  'margin-right': '10px'
}

export default class Navbar extends Component {
  render () {
    console.log(this.props)
    const categories = this.props.categories;
    return (
      <nav className ="navbar navbar-default">
        <Toolbar>
          <ToolbarGroup>
            <div className ="container-fluid">
              <ul className="nav navbar-nav">
                <RaisedButton style={style}><Link to='/products'>All</Link></RaisedButton>
              {categories && categories.map((category) => {
                return <RaisedButton style={style} key={category.id}><Link to="#">{category.name}</Link></RaisedButton>
              })}
              </ul>
            </div>
          </ToolbarGroup>
        </Toolbar>
      </nav>
    )
  }
}
