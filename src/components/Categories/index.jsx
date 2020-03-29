import React from 'react';
import PropTypes from 'prop-types';

import './Categories.scss';

const Categories = ({ activeItem, items, onClick }) => {
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            onClick={onClick.bind(this, index)}
            key={index}
            className={activeItem === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  activeItem: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default Categories;
