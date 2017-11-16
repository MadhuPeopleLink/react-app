import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer.js';

import categories from './data/categories.js';
import products from './data/products.js';

const defaultState = {
  categories, products
};

const store = createStore(rootReducer, defaultState);

export default store;