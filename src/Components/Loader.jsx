import React from 'react';
import './Loader.css'
const Loader = () => (
  <div className="heartbeatloader " style={{zIndex:999}}  >
    <svg className="svgdraw" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
      <path
        className="path"
        d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
        fill="transparent"
        strokeWidth="4"
        stroke="black"
      ></path>
    </svg>
    <div className="heart-container">
      <div className="heart"></div>
    </div>
  </div>
);

export default Loader;