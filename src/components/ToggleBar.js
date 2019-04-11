import React from 'react';
import PropTypes from 'prop-types';
import ToggleItem from './ToggleItem';

const ToggleBar = ({ showDogs, showParks, toggleDogs, toggleParks }) => {
  return (
    <ul className="nav nav-tabs nav-justified">
      <ToggleItem active={showDogs} onClick={toggleDogs} title="Dogs" />
      <ToggleItem active={showParks} onClick={toggleParks} title="Parks" />
    </ul>
  )
}

ToggleBar.propTypes = {
  showDogs: PropTypes.bool.isRequired,
  showParks: PropTypes.bool.isRequired,
  toggleDogs: PropTypes.func.isRequired,
  toggleParks: PropTypes.func.isRequired,
}

export default ToggleBar;
