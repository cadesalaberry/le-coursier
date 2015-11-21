import React from 'react';
import Recipe from './Recipe.jsx';


module.exports = React.createClass({
  render: function () {

    var recipes = this.props.recipes.map(function (o, i) {
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
