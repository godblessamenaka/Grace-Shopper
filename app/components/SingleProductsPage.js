import React, {Component} from 'react'
import {Link} from 'react-router';

export default class SingleProductsPage extends Component {
  render () {
    const products = this.props.products;
    return (
        <div>
            {products && products.map((product) => {
               return <div key={product.id}>{product.name}</div>
            })}
        </div>
    )
  }
}
