import { combineReducers } from 'redux';

import products from './products.js';
import categories from './categories.js';

const rootReducer = combineReducers({products, categories});

export default rootReducer;