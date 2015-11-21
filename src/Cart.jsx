import React from 'react';

import CartItem from './CartItem.jsx';


module.exports = React.createClass({
  getInitialState: function () {
    return ({
      items: [
        {
          "recipe_id": 1,
          "title": "This is a title",
          "quantity": 2,
        }
      ],
    });
  },
  render: function () {

    var content = this.state.items.map(function (o, i) {
      return (
        <div className="mdl-cell"> 
          <CartItem
            key={i} title={o["name"]}
            quantity={o["quantity"]} />
        </div>
      );
    });

    return (
      <div className="mdl-grid">
        {content}
      </div>
    );
  }
});
