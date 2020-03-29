import axios from 'axios';

export const Types = {
  SET_ITEMS: 'PIZZAS@SET:ITEMS',
  LOADING: 'PIZZAS@LOADING:START',
  LOADED: 'PIZZAS@LOADING:FINISH',
  ERROR: 'PIZZAS@LOADING:ERROR',
};

let timer = null;

const Actions = {
  setItems: payload => ({
    type: Types.SET_ITEMS,
    payload,
  }),
  fetchItems: ({ sortBy, category }) => dispatch => {
    dispatch(Actions.isLoading);
    return axios
      .get(`/pizzas?${category ? 'category=' + category + '&' : ''}_sort=${sortBy}&_order=desc`)
      .then(({ data }) => {
        dispatch(Actions.setItems(data));
      })
      .catch(err => {
        console.error(err);
        dispatch(Actions.isError(err));
      });
  },
  isLoading: {
    type: Types.LOADING,
  },
  isLoaded: {
    type: Types.LOADED,
  },
  isError: err => ({
    type: Types.ERROR,
    payload: err,
  }),
};

export default Actions;
