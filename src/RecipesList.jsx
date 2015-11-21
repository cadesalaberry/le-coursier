import React from 'react';
import Recipe from './Recipe.jsx';


module.exports = React.createClass({
  getInitialState: function() {
    return {
      recipes: [],
      recipe: {
        title: "Error"
      }
    };
  },
  componentDidMount: function() {
    $.getJSON("./recipes/recipes.json", function (result) {
      if (this.isMounted()) {
        this.setState({
          recipes: result
        });
      }
    }.bind(this));
  },
  render: function () {

    var recipes = this.state.recipes.map(function (o, i) {
      return (
        <div className="mdl-cell"> 
          <Recipe key={i} title={o["title"]}
            image_url={o["image_name"]}
            description={o["instructions"]}
            servings={o["servings"]} />
        </div>
      );
    })

    return (
      <div className="mdl-grid">
        {recipes}
      </div>
    );
  }
});
