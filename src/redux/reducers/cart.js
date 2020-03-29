import produce from 'immer';
import { reduce, map } from 'lodash';

import { Types } from '../actions/cart';

const initState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.ADD_TO_CART:
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;
      case Types.PLUS_ITEM:
        draft.items[action.payload].push(draft.items[action.payload][0]);
        break;
      case Types.MINUS_ITEM:
        if (draft.items[action.payload].length > 1) {
          draft.items[action.payload].shift();
        }
        break;
      case Types.REMOVE_ITEMS_BY_ID:
        delete draft.items[action.payload];
        break;
      case Types.CLEAR_ITEMS:
        draft.items = {};
        break;
      default:
    }

    const result = reduce(map(draft.items), (prev, cur) => prev.concat(cur), []);
    draft.totalPrice = result.reduce((total, obj) => obj.price + total, 0);
    draft.itemsCount = result.length;
  });
};
