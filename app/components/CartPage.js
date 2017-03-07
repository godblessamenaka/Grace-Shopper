import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

// const styles = {
//   propContainer: {
//     width: 200,
//     overflow: 'hidden',
//     margin: '20px auto 0',
//   },
//   propToggleHeader: {
//     margin: '20px auto 10px',
//   },
// };

// const dummyCartProducts = [
//   { name: 'Love Potion #9',
//     image: 'lovepotion9.jpg',
//     price: 300.00,
//     qty: 1
//   },

//   { name: 'Love Potion #10',
//     image: 'lovepotion10.jpg',
//     price: 220.00,
//     qty: 1
//   },
//   { name: 'Love Potion #11',
//     image: 'lovepotion11.jpg',
//     price: 220.00,
//     qty: 1

//   },
//   { name: 'Felix Felicis',
//     image: 'felixfelicis.jpg',
//     price: 220.00,
//     qty: 3
//   }
// ];

const CartPage = (props) => {
   const productsInCart = props.productsInCart;
   console.log('here are the contents of your cart: ', productsInCart)
   const RowsFromProducts = productsInCart.map(function(product){
    return (
      <TableRow key>
            <TableRowColumn>{product.image}</TableRowColumn>
            <TableRowColumn>{product.name}</TableRowColumn>
            <TableRowColumn>{product.price}</TableRowColumn>
            <TableRowColumn>{product.qty}</TableRowColumn>
            <TableRowColumn>{ (product.qty) * (product.price) }</TableRowColumn>
      </TableRow>
  );
});
    return (
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Image</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Qty</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
        {RowsFromProducts}
        </TableBody>
      </Table>
      {productsInCart.length===0 ? <RaisedButton label="Keep Shopping" fullWidth={true} /> : <RaisedButton label="Checkout" fullWidth={true} />} 
      </div>

    )
}

export default CartPage;
