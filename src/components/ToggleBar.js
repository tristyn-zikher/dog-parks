import React, { Component } from 'react';
import ToggleItem from './ToggleItem';

class ToggleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // To add more nav-items, just add a 'name' and 'title' to ToggleItems
    return (
      <ul class="nav nav-tabs nav-justified">
        <ToggleItem active={this.props.showDogs} onClick={this.props.toggleDogs} title="Dogs" />
        <ToggleItem active={this.props.showParks} onClick={this.props.toggleParks} title="Parks" />
      </ul>
    )
  }
}

export default ToggleBar;
