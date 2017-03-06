import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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

export default class CartPage extends Component {
  render(){
    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Image</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Qty</TableHeaderColumn>
            <TableHeaderColumn>Total Item Price</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>image</TableRowColumn>
            <TableRowColumn>Potion</TableRowColumn>
            <TableRowColumn>200</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>400</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>image2</TableRowColumn>
            <TableRowColumn>Potion2</TableRowColumn>
            <TableRowColumn>300</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>300</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>image3</TableRowColumn>
            <TableRowColumn>Potion3</TableRowColumn>
            <TableRowColumn>200</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>600</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>image4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>350</TableRowColumn>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>350</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

//export default CartPage;
