import React from 'react';

const ToggleItem = ({ title, active, onClick }) => {
  const toggleClass = active ? "nav-link active" : "nav-link";
  return (
      <li onClick={onClick} className="nav-item">
        <div className={toggleClass} id="home-tab">{title}</div>
      </li>
  )
}

export default ToggleItem;
