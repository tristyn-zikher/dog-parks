import React from 'react';
import ToggleItem from './ToggleItem';

const ToggleBar = ({ showDogs, showParks, toggleDogs, toggleParks }) => {
  return (
    <ul className="nav nav-tabs nav-justified">
      <ToggleItem active={showDogs} onClick={toggleDogs} title="Dogs" />
      <ToggleItem active={showParks} onClick={toggleParks} title="Parks" />
    </ul>
  )
}

export default ToggleBar;
