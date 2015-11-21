
import React from 'react';
import ReactDOM from 'react-dom';
import RecipesList from './RecipesList.jsx';
import {
  Tab,
  Layout,
  Header,
  Content,
  HeaderRow,
  HeaderTabs
} from 'react-mdl';


var App = React.createClass({
  getInitialState: function () {
    return {
      shopping_list: [],
      recipes: [],
      cart: [],
      currentTab: 0,
      tabs: {
        0: <RecipesList />,
        1: "Loading Cart...",
        2: "Loading Shopping List...",
      },
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

    return (
      <Layout fixedHeader fixedTabs>
        <Header>
          <HeaderRow title="Recipes To List" />
          <HeaderTabs onChange={(tabId) => { this.setState({currentTab:tabId}) }} ripple>
            <Tab>Recipes</Tab>
            <Tab>Cart</Tab>
            <Tab>Shopping List</Tab>
          </HeaderTabs>
        </Header>
        <Content>
          <div className="page-content">
            {this.state.tabs[this.state.currentTab]}
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
