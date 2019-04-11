import React from 'react';
import ToggleBar from './ToggleBar';
import MapContainer from './MapContainer';

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

export default DogMap;
