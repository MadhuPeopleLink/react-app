import { createStore } from 'redux';


import rootReducer from './reducers/root-reducer.js';

import products from './data/products.js';
import categories from './data/categories.js';

console.log("products ", products);
console.log("categories ", categories);


const defaultState = {
  categories, products
};

console.log("defaultState ", defaultState);

const store = createStore ( rootReducer, defaultState );

export default store;