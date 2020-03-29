import produce from 'immer';
import { Types } from '../actions/filters';

const initState = {
  category: 0,
  sortBy: 'rating',
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_CATEGORY:
        draft.category = action.payload;
        break;
      case Types.SET_SORT_BY:
        draft.sortBy = action.payload;
        break;
      case Types.SET_FILTERS:
        draft.category = action.payload.category;
        draft.sortBy = action.payload.sortBy;
        break;
      default:
    }
  });
};
