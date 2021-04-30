import { combineReducers } from 'redux';

import sneakers from './sneakers';
import cart from './cart';

const rootReducers = combineReducers({
  sneakers,
  cart,
});

export default rootReducers;
