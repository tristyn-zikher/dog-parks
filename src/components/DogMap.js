import React from 'react';
import ToggleBar from './ToggleBar';
import MapContainer from './MapContainer';
import PropTypes from 'prop-types';

const DogMap = ({ toggleDogs, toggleParks, showDogs, showParks }) => {
  return (
   <div className="col-md-9 app-right">
     <ToggleBar
       showDogs={showDogs}
       showParks={showParks}
       toggleDogs={toggleDogs}
       toggleParks={toggleParks}
     />
     <MapContainer />
   </div>
  )
}

DogMap.propTypes = {
  showDogs: PropTypes.bool.isRequired,
  showParks: PropTypes.bool.isRequired,
  toggleDogs: PropTypes.func.isRequired,
  toggleParks: PropTypes.func.isRequired,
}

export default DogMap;
