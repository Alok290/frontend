import React from 'react';
import './Gradient.css';
import Design from '../Designe/Design';
import Choose from '../whyChooseUs/ChooseUs';

function GradientBackground() {
  return (
    <div className="gradient-bg">
      <h1 className="gradient-text">Background</h1>
     <div> {<Design/>}</div>
     
    </div>
  );
}

export default GradientBackground;
