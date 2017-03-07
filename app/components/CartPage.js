import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

const CartPage = (props) => {
   const productsInCart = props.productsInCart;
   const selectedProducts = [];
   const RowsFromProducts = productsInCart.map(function(product){
    return (
      <TableRow key="tablerow">
            <TableRowColumn>{product.image}</TableRowColumn>
            <TableRowColumn>{product.name}</TableRowColumn>
            <TableRowColumn>{product.price}</TableRowColumn>
            <TableRowColumn>{product.qty}</TableRowColumn>
            <TableRowColumn>{ (product.qty) * (product.price) }</TableRowColumn>
      </TableRow>
  );
});
   RowsFromProducts.push(<TableRow key="1">
            <TableRowColumn>xyz.jpg</TableRowColumn>
            <TableRowColumn>Potion #1</TableRowColumn>
            <TableRowColumn>175</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>175</TableRowColumn>
          </TableRow>)
   console.log(RowsFromProducts);
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
        { RowsFromProducts }
        </TableBody>
      </Table>
      <RaisedButton label="Delete Checked" fullWidth={true} />
      {productsInCart.length === 0 ? <RaisedButton label="Keep Shopping" fullWidth={true} /> : <RaisedButton label="Checkout" fullWidth={true} />}
      </div>

    )
}

console.log('here are the contents of your cart: ', productsInCart)
//create function to collect an array of all row items that have been selected (via this.props.selected = true), then 'onClick' of button, delete those items


export default CartPage;
