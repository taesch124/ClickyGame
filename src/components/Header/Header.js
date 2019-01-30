import React from 'react';
import './styles.css';

function Header(props) {
  return (
    <div className="header card-panel grey lighten-2">
        <h2>Clicky Game!</h2>
        <span>Click on an image to earn points, but don't click on any more than once!</span>
    </div>
  );
}

export default Header;