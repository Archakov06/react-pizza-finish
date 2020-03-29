import produce from 'immer';
import { Types } from '../actions/pizzas';

const initState = {
  items: null,
  isLoading: false,
  error: null,
};

export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_ITEMS:
        draft.items = action.payload;
        draft.isLoading = false;
        break;
      case Types.LOADING:
        draft.isLoading = true;
        break;
      case Types.LOADED:
        draft.isLoading = false;
        break;
      case Types.ERROR:
        draft.isLoading = false;
        draft.error = action.payload;
        break;
      default:
    }
  });
};
