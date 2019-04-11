import React from 'react';
import PropTypes from 'prop-types';

const ToggleItem = ({ title, active, onClick }) => {
  const toggleClass = active ? "nav-link active" : "nav-link";
  return (
    <li onClick={onClick} className="nav-item">
      <div className={toggleClass} id="home-tab">{title}</div>
    </li>
  )
}

ToggleItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ToggleItem;
