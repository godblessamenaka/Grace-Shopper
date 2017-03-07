import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

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

onClick(id){
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
                <RaisedButton
                  onClick={() => {this.onClick()}}
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
                      onClick={() => {this.onClick(category.id)}}
                      style={buttonStyle}
                      secondary={true}
                      labelColor="white"
                    >
                      {category.name}
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
