
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
          {{
            0: <RecipesList recipes={this.state.recipes}/>,
            1: "Loading Cart...",
            2: "Loading Shopping List...",
          }[this.state.currentTab]}
        </Content>
      </Layout>
    );
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
