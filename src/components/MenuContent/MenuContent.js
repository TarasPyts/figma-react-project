import React, { useRef, useEffect } from 'react';
import './MenuContent.css';
import Button from '../Button/Button';

const MenuContent = ({
  activeButton,
  currentQuestion,
  renderOptions,
  handleNextButtonClick,
  currentQuestionIndex,
  questionsLength,
}) => {
  const lineContainerRef = useRef(null);

  useEffect(() => {
    lineContainerRef.current.style.width = `${
      (currentQuestionIndex / questionsLength) * 100
    }%`;
  }, [currentQuestionIndex, questionsLength]);

  return (
    <div className={`container2 ${activeButton ? 'open' : ''}`}>
      <div className="line-container">
        <div className="line" ref={lineContainerRef}></div>
      </div>
      <div className="main_menu">
        <h2 id="question">{currentQuestion.question}</h2>
        {renderOptions()}
      </div>
      <div className="button-container">
        <Button onClick={handleNextButtonClick} />
      </div>
    </div>
  );
};

export default MenuContent;
