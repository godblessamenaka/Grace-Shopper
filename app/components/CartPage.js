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

const CartPage = (props) => {
  const productsInCart = props.productsInCart;
  const RowsFromProducts = productsInCart.map(function(product){
    return (
      <TableRow key={product.id}>
            <TableRowColumn><img src={'/images/main bottles' + product.image} /> </TableRowColumn>
            <TableRowColumn>{product.name}</TableRowColumn>
            <TableRowColumn>{product.price}</TableRowColumn>
            <TableRowColumn>{product.quantity}</TableRowColumn>
            <TableRowColumn>{ (product.quantity) * (product.price) }</TableRowColumn>
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
      {productsInCart.length === 0 ? <RaisedButton label="Keep Shopping" fullWidth={true} /> : <RaisedButton label="Checkout" fullWidth={true} secondary={true} />}
      </div>

    )
}

export default CartPage;

