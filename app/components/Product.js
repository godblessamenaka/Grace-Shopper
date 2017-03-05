import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const CardExampleWithAvatar = (props) => (
  <Card>
    <CardMedia>
      <img src={props.image} />
    </CardMedia>
    <CardTitle title={props.name} subtitle="Card subtitle" />
    <CardText>{ props.description }</CardText>
    <CardActions>
      <span style={{margin: 10}}>$ {props.price}</span>
      <FlatButton label="Buy" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;