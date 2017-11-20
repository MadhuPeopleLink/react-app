import React from 'react';
import ReactDom from 'react-dom';
import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import { Provider } from 'redux';


import store from './store.js';
import ProductsList from './components/products/ProductsList';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1> Welcome to Home Page </h1>
        <Link to="/products"> Products </Link>
      </div>
    );
  }
};

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={Home} /> 
          <Route path="/products" component={ProductsList} /> 
        </Switch>
      </div>

    );
  }
};



ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('root'));