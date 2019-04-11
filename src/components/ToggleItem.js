import React from 'react';

const ToggleItem = ({ title, active, onClick }) => {
  const toggleClass = active ? "nav-link active" : "nav-link";
  return (
      <li onClick={onClick} className="nav-item">
        <a className={toggleClass} id="home-tab">{title}</a>
      </li>
  )
}

export default ToggleItem;
