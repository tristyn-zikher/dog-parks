import React, { Component } from 'react';
import DogMap from './components/DogMap';
import Logo from './components/Logo';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { MAPBOX_ACCESS_TOKEN, API_URL } from './config'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDogs: true,
      showParks: true,
    }
    this.toggleDogs = this.toggleDogs.bind(this);
    this.toggleParks = this.toggleParks.bind(this);
    this.fetchDogs = this.fetchDogs.bind(this);
    this.fetchParks = this.fetchParks.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 1,
    });
    this.fetchDogs();
    this.fetchParks()
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  toggleDogs() {
    var dogs = document.getElementsByClassName("dog-marker");
    var i;
    for (i = 0; i < dogs.length; i++) {
      if (this.state.showDogs) {
        dogs[i].style.visibility = "hidden";
      } else {
        dogs[i].style.visibility = "visible";
      }
    }
    this.setState({showDogs: !this.state.showDogs})
  }

  toggleParks() {
    var parks = document.getElementsByClassName("park-marker");
    var i;
    for (i = 0; i < parks.length; i++) {
      if (this.state.showParks) {
        parks[i].style.visibility = "hidden";
      } else {
        parks[i].style.visibility = "visible";
      }
    }
    this.setState({showParks: !this.state.showParks})
  }

  fetchDogs() {
    fetch(API_URL+"parks?limit=100&offset=0")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.results.forEach((data) => {
        // create DOM element for the marker
        var el = document.createElement('div');
        el.className = 'park-marker';

        // create the marker
        new mapboxgl.Marker(el)
        .setLngLat([data.longitude, data.latitude])
        .addTo(this.map);
      })
    })
  }

  fetchParks() {
    fetch(API_URL+"dogs?limit=100&offset=0")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      res.results.forEach((data) => {
        // create the popup
        var popup = new mapboxgl.Popup({ offset: 25 })
        .setText(`This dogs name is ${data.name}`);

        // create DOM element for the marker
        var el = document.createElement('div');
        el.className="dog-marker"

        // create the marker
        new mapboxgl.Marker(el)
        .setLngLat([data.longitude, data.latitude])
        .setPopup(popup) // sets a popup on this marker
        .addTo(this.map);
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <Logo />
          <DogMap
            showParks={this.state.showParks}
            showDogs={this.state.showDogs}
            toggleDogs={this.toggleDogs}
            toggleParks={this.toggleParks}
          />
        </div>
      </div>
    );
  }
}

export default App;
