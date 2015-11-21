
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Tab,
  Icon,
  Badge,
  Layout,
  Header,
  Content,
  HeaderRow,
  HeaderTabs
} from 'react-mdl';

import RecipesList from './RecipesList.jsx';
import Cart from './Cart.jsx';


var App = React.createClass({
  getInitialState: function () {
    return {
      shopping_list: [],
      recipes: [],
      cart: [],
      currentTab: 0,
    };
  },
  componentDidMount: function () {
    $.getJSON("./recipes/recipes.json", function (result) {
      if (this.isMounted()) {
        this.setState({
          recipes: result
        });
      }
    }.bind(this));
  },
  render: function () {

    var tab = this.state.currentTab;
    console.log("Rendering AppTab " + tab);

    // <Cart style={tab == 1 ? {} : {display: 'none'}} items={this.state.cart}/>
    return (
      <Layout fixedHeader fixedTabs>
        <Header>
          <HeaderRow title="Recipes To List" />
          <HeaderTabs onChange={(tabId) => { this.setState({currentTab:tabId}) }} ripple>
            <Tab>Recipes</Tab>
            <Tab><Badge text="1">Cart</Badge></Tab>
            <Tab>Shopping List</Tab>
          </HeaderTabs>
        </Header>
        <Content>
          <div style={tab == 0 ? {} : {display: 'none'}}>
            <RecipesList recipes={this.state.recipes}/>
          </div>
          <div style={tab == 1 ? {} : {display: 'none'}}>
            <Cart/>
          </div>
          <div style={tab == 2 ? {} : {display: 'none'}}>
            Loading Shopping List...
          </div>
        </Content>
      </Layout>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
