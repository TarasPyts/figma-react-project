import React from 'react';
import textConstants from '../../variables/variables';
import './Loader.css';

function Loader({ answers, restart, activeButton }) {
  return (
    <div className="container3">
      <div className="line-container">
        <div className="line"></div>
      </div>
      <h2>{textConstants.RESULT_PROCESSING}</h2>
      <div>
        <div className="loader"></div>
      </div>
      <div>
        <h5>{textConstants.THINKING_DETERMINATION}</h5>
      </div>
    </div>
  );
}

export default Loader;
