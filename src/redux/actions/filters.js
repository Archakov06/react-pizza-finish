export const Types = {
  SET_CATEGORY: 'FILTER@SET_CATEGORY',
  SET_SORT_BY: 'FILTER@SET_SORT_BY',
  SET_FILTERS: 'FILTER@SET',
};

const Actions = {
  setCategory: id => ({
    type: Types.SET_CATEGORY,
    payload: id,
  }),
  setSortBy: name => ({
    type: Types.SET_SORT_BY,
    payload: name,
  }),
  setFilters: ({ category, sortBy }) => ({
    type: Types.SET_FILTERS,
    payload: {
      category,
      sortBy,
    },
  }),
};

export default Actions;
