import React, {Component} from 'react'

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
