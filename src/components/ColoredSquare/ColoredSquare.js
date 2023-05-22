import React from 'react';

const ColoredSquare = ({ color, handleOptionClick, selectedOption }) => {
  const isSelected = selectedOption === color;

  const handleClick = () => {
    handleOptionClick(color);
  };

  return (
    <div
      className={`colored-square ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default ColoredSquare;
