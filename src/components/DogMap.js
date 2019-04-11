import React from 'react';
import ToggleBar from './ToggleBar';

const DogMap = ({ toggleDogs, toggleParks, showDogs, showParks }) => {
  return (
   <div className="col-md-9 app-right">
    <ToggleBar
      showDogs={showDogs}
      showParks={showParks}
      toggleDogs={toggleDogs}
      toggleParks={toggleParks}
    />
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home">
        <h3 className="app-heading">Doggy Map</h3>
        <div className="row app-form">
          <div style={{height: 500, width: "100%"}} id="map-container"></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DogMap;
