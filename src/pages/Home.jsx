import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { PizzaBlock, Categories, SortPopup } from '../components';
import { pizzasActions, cartActions, filtersActions } from '../redux/actions';

function App() {
  const dispatch = useDispatch();
  const [pizzas, isLoading, cartItems, filters] = useSelector(state => [
    state.pizzas.items,
    state.pizzas.isLoading,
    state.cart.items,
    state.filters,
  ]);

  const addToCart = React.useCallback(obj => dispatch(cartActions.addToCart(obj)), [dispatch]);
  const selectSort = React.useCallback(obj => dispatch(filtersActions.setSortBy(obj.value)), [
    dispatch,
  ]);
  const selectCategory = React.useCallback(
    index => {
      dispatch(filtersActions.setCategory(index));
    },
    [dispatch],
  );

  React.useEffect(() => {
    dispatch(pizzasActions.fetchItems(filters));
  }, [dispatch, filters]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className={classNames('content__top', { noclick: isLoading })}>
        <Categories
          activeItem={filters.category}
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClick={selectCategory}
        />
        <SortPopup sortBy={filters.sortBy} onSelect={selectSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {console.log(isLoading)}
      <div className="content__items">
        {pizzas && !isLoading
          ? pizzas.map(item => (
              <PizzaBlock
                key={item.id}
                {...item}
                onAdd={addToCart}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            ))
          : [...Array(8)].map((_, index) => <PizzaBlock key={index} isLoading={isLoading} />)}
      </div>
    </React.Fragment>
  );
}

export default App;
