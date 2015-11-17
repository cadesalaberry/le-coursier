var React = require('react');
var ReactMDL = require('react-mdl');


var CardActions = ReactMDL.CardActions;
var IconButton = ReactMDL.IconButton;
var CardTitle = ReactMDL.CardTitle;
var CardText = ReactMDL.CardText;
var CardMenu = ReactMDL.CardMenu;
var Card = ReactMDL.Card;
var Button = ReactMDL.Button;

module.exports = React.createClass({
  getInitialState: function () {
    return ({
      recipe: {
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
      }
    });
  },
  render: function () {
    var title = this.props.title || this.state.recipe["title"];
    var servings = this.props.servings || this.state.recipe["servings"];
    var image_url = './recipes/images/' + (this.props.image_url || this.state.recipe["image_name"]);
    var description = this.props.description || this.state.recipe["instructions"];

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
          <IconButton name="face" colored /> {servings}
          <Button colored style={{float:"right"}}>Add to Cart</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="supervisor account" />
        </CardMenu>

      </Card>
    );
  }
});
