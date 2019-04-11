import React from 'react';
import DogLogo from '../images/dog-logo.png';

const Logo = () => {
  return (
    <div className="col-md-3 app-left">
      <img src={DogLogo} alt="" />
      <h3>DogFinder.io</h3>
    </div>
  )
}

export default Logo
