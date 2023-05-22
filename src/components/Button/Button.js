import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="next_grey" onClick={onClick}>
      ДАЛЕЕ
    </button>
  );
};

export default Button;
