import React, {Component} from 'react'
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
constructor(){
  super()
  this.onClick = this.onClick.bind(this);
}

onClick(event){
  event.preventDefault()
  if (event.target.value){
    this.props.fetchCategory(event.target.value)
  }
  else {
    //if All button is hit, set selectedCategory back to empty object
    this.props.getCategory({});
  }
}

  render () {
    const categories = this.props.categories;
    return (
      <nav className ="navbar navbar-default">
        <Toolbar style={{height: '75px'}}>
          <ToolbarGroup style={listStyle}>
            <div className ="container-fluid" >
              <ul className="nav navbar-nav">
                <RaisedButton
                  onClick={this.onClick}
                  style={buttonStyle}
                  primary={true}
                  labelColor="#a4c639">
                  All
                </RaisedButton>
              {categories && categories.map((category) => {
                return (
                  <RaisedButton
                    key={category.id}
                    value={category.id}
                    onClick={this.onClick}
                    style={buttonStyle}
                    secondary={true}
                    labelColor="white"
                  >
                    {category.name}
                  </RaisedButton>
                )
              })}
            </div>
          </ToolbarGroup>
        </Toolbar>
      </nav>
    )
  }
}
