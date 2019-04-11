import React from 'react';

const MapContainer = () => {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home">
        <h3 className="app-heading">Doggy Map</h3>
        <div className="row app-form">
          <div style={{height: 500, width: "100%"}} id="map-container" />
        </div>
      </div>
    </div>
  )
}

export default MapContainer;
