import React from 'react';
import {Link} from 'react-router';

function MultipleProducts (props){
  let products = []
  if (props.selectedCategory.id && props.products){
    products = props.products.map((product) => {
      product.categories.filter(function(category){
        return category.id === props.selectedCategory.id
      })
    })
  }
  else {
    products = props.products
  }

    return (
      <div>
      {
        products && products.map(product => (
          <div className="col-xs-4" key={product.id}>
            <Link className="thumbnail" to={`/products/${product.id}`} >
              <img src={ product.image } />
              <h5>
                <span>{ product.name }</span>
              </h5>
              <h5>
                <span>{ product.description }</span>
              </h5>
              <h5>
                <span>{ product.price }</span>
              </h5>
            </Link>
          </div>
      ))}
      </div>
    );
}

export default MultipleProducts;
