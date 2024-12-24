// Container.js
import React from 'react';
import './container.css'; // Import the styles

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;