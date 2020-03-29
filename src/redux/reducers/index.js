import { combineReducers } from 'redux';

import cart from './cart';
import pizzas from './pizzas';
import filters from './filters';

export default combineReducers({
  cart,
  pizzas,
  filters,
});
