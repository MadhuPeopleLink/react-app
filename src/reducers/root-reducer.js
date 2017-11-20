import { combineReducers } from 'redux';

console.log(2);

import products from './products.js';
import categories from './categories.js';
console.log(3);

const rootReducer = combineReducers({products, categories});

export default rootReducer;