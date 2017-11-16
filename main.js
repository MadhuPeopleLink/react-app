import React from 'react';
import ReactDom from 'react-dom';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import store  from './store.js';

import Home from './components/Home.jsx';

import ProductList from './components/Products/ProductsList.jsx';
import CreateProduct from './components/Products/CreateProduct.jsx';

import CategoriesList from './components/Categories/CategoriesList.jsx';
import CreateCategory from './components/Categories/CategoriesList.jsx';


class App extends React.Component {
  render () {
    return (
      <div> 
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/create-product" component={CreateProduct} />

          <Route path="/categories" component={CategoriesList} />
          <Route path="/categories/create-category" component={CreateCategory} />          
        </Switch>
      </div>
    );
  }
};

ReactDom.render( <BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));