import React from 'react';
import {
  CardActions,
  IconButton,
  CardTitle,
  CardText,
  CardMenu,
  Button,
  Card
} from 'react-mdl';


module.exports = React.createClass({
  getInitialState: function () {
    return {
      item: {
        "recipe_id": 1,
        "title": "This is a title",
        "image_name": "tomato-cucumber-avocado-salad.jpg",
        "instructions": "Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl.\r\n\r\nSprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper.\r\n\r\nNote: Add avocado right before serving if you are planning to refrigerate the salad.",
        "servings": 4,
        "ingredients": [
          {
            "display_index": 0,
            "name": "cherry tomatoes",
            "department": "Produce",
            "quantity": 237,
            "unit": "ml"
          }
        ]
      },
      quantity: 2
    };
  },
  render: function () {
    var title = this.props.title || this.state.item["title"];
    var image_url = './recipes/images/' + (this.props.image_url || this.state.item["image_name"]);
    var description = this.props.description || this.state.item["instructions"];
    var quantity = this.props.quantity || this.state.quantity;

    return (
      <Card shadow={0} style={{width: '320px', height: '320px'}} >
        <CardTitle style={{
          color: '#fff',
          height: '200px',
          background: 'url(' + image_url + ') bottom right 15% no-repeat #46B6AC',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%"
          }}>
          {title}
        </CardTitle>
        
        <CardText style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
          {description}
        </CardText>
        
        <CardActions border>
          <Button colored style={{float:"right"}}>Add to Cart</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          {quantity}
        </CardMenu>

      </Card>
    );
  }
});