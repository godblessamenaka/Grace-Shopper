import React from 'react';
import {Link} from 'react-router';
import Product from '../components/Product'

function MultipleProducts (props){
  let products = [];
  if (!props.selectedCategory.id){
    products = props.products;
  }
  else {
    for (var i = 0; i < props.products.length; i++){
      props.products[i].categories.forEach((category) => {
        if (category.id === props.selectedCategory.id) products.push(props.products[i]);
      })
    }
  }

  console.log(products);

  const image = 'http://placehold.it/350x250'

  const style = {
    position: 'realative',
    overflow: 'hidden'
  }

    return (
      <div >
        {
          products && products.map(product => (
            <div className="col-xs-4" style={style} key={product.id}>
              <Link className="thumbnail" to={`/products/${product.id}`} >
                <Product
                  image={ image }
                  name={ product.name }
                  description={ product.description }
                  price={ product.price }
                />
              </Link>
            </div>
        ))}
      </div>
    );
}

export default MultipleProducts;

              // <img src={ product.image } />
              // <h5>
              //   <span>{ product.name }</span>
              // </h5>
              // <h5>
              //   <span>{ product.description }</span>
              // </h5>
              // <h5>
              //   <span>{ product.price }</span>
              // </h5>