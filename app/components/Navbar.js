import React, {Component} from 'react'
import {Link} from 'react-router';

export default class Navbar extends Component {
constructor(){
  super()
  this.onClick = this.onClick.bind(this);
}

onClick(event){
  event.preventDefault()
  if (event.target.value) this.props.fetchCategory(event.target.value)
}

  render () {
    const categories = this.props.categories;
    return (
        <nav className ="navbar navbar-default">
          <div className ="container-fluid">
                <button onClick={this.onClick}>All</button>
              {categories && categories.map((category) => {
                return <button key={category.id} value={category.id} onClick={this.onClick}>{category.name}</button>
              })}
            </div>
        </nav>
    )
  }
}
