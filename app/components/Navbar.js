import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {Link} from 'react-router';

const buttonStyle = {
  marginRight: '10px',
  marginBottom: '0px'
}

const listStyle = {
  margin: 'auto'
}

export default class Navbar extends Component {
constructor(){
  super()
  this.onCategoryClick = this.onCategoryClick.bind(this);
}

onCategoryClick(id){
  if (id){
    this.props.fetchCategory(id)
  }
  else {
    //if All button is hit, set selectedCategory back to empty object
    this.props.getCategory({});
  }
}

  render () {
    const categories = this.props.categories;
    return (
      <nav className ="">
        <Toolbar style={{height: '75px'}}>
          <ToolbarGroup style={listStyle}>
            <div className ="container-fluid" >
              <ul className="nav navbar-nav">
              <Link to={'/products'}>
                <RaisedButton
                  onClick={() => {this.onCategoryClick()}}
                  style={buttonStyle}
                  primary={true}
                  labelColor="#a4c639">
                  All
                </RaisedButton></Link>
                {categories && categories.map((category) => {
                  return (
                    <Link key={category.id} to={'/products'}>
                    <RaisedButton
                      value={category.id}
                      onClick={() => {this.onCategoryClick(category.id)}}
                      style={buttonStyle}
                      secondary={true}
                      labelColor="white"
                    >
                      {category.name}
                    </RaisedButton></Link>
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
