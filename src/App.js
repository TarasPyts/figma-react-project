import React, { useState, useEffect } from 'react';
import { image1, image2, image3 } from './styles';
import questions from './questions/questions';

import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import MainContent from './components/MainContent/MainContent';
import MenuContent from './components/MenuContent/MenuContent';
import ColoredSquare from './components/ColoredSquare/ColoredSquare';
import Loader from './components/Loader/Loader';
import FinishScreen from './components/FinishScreen/FinishScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [lastQuestionAnswered, setLastQuestionAnswered] = useState(false);
  const [finishScreen, setFinishScreen] = useState(false);

  const toggleMenu = () => {
    setActiveButton(!activeButton);
  };

  const toggleNavMenu = () => {
    setNavMenuOpen(!isNavMenuOpen);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentOptions = currentQuestion.options;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      if (currentQuestionIndex === questions.length - 1) {
        setLastQuestionAnswered(true);
        // setCurrentQuestionIndex(0);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }

      setAnswers([...answers, selectedOption]);

      setSelectedOption(null);
    }
  };

  const renderOptions = () => {
    if (currentQuestionIndex === 4) {
      return (
        <div className="question4_style">
          {currentOptions.map((option, index) => (
            <ColoredSquare
              key={index}
              color={option}
              handleOptionClick={handleOptionClick}
              selectedOption={selectedOption}
            />
          ))}
        </div>
      );
    } else if (currentQuestionIndex === 6) {
      return (
        <div className="question6_style">
          <div>
            <img src={image1} alt={`image1.png`} />
          </div>
          <div>
            {currentOptions.map((option, index) => (
              <div
                key={index}
                className={`option-inner ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentQuestionIndex === 8) {
      return (
        <div className="question8_style">
          <div>
            <img src={image3} alt={`image3.png`} />
          </div>
          <div className="options">
            {currentOptions.map((option, index) => (
              <div
                key={index}
                className={`option-inner ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (currentQuestionIndex === 9) {
      return (
        <div className="question9_style">
          <div>
            <img src={image2} alt={`image2.png`} />
          </div>
          <div className="horizontal-line"></div>
          <div>
            {currentOptions.map((option, index) => (
              <div
                key={index}
                className={`option-inner ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="options">
          {currentOptions.map((option, index) => (
            <div
              key={index}
              className={`option-inner ${
                selectedOption === option ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <label>{option}</label>
            </div>
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    if (lastQuestionAnswered) {
      const timeoutId = setTimeout(() => {
        setFinishScreen(true);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [lastQuestionAnswered]);

  return (
    <div className="App">
      <Header
        toggleNavMenu={toggleNavMenu}
        activeButton={activeButton}
        finishScreen={finishScreen}
      />
      <NavMenu
        isNavMenuOpen={isNavMenuOpen}
        closeNavMenu={toggleNavMenu}
        setActiveButton={setActiveButton}
        setFinishScreen={setFinishScreen}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        setLastQuestionAnswered={setLastQuestionAnswered}
        setSelectedOption={setSelectedOption}
      />
      <MainContent toggleMenu={toggleMenu} activeButton={activeButton} />
      {!lastQuestionAnswered ? (
        <MenuContent
          activeButton={activeButton}
          currentQuestion={currentQuestion}
          renderOptions={renderOptions}
          handleNextButtonClick={handleNextButtonClick}
          handleOptionClick={handleOptionClick}
          currentQuestionIndex={currentQuestionIndex}
          questionsLength={questions.length}
        />
      ) : (
        <>
          {finishScreen ? (
            <FinishScreen />
          ) : (
            <Loader
              activeButton={activeButton}
              answers={answers}
              restart={() => {
                setLastQuestionAnswered(false);
                setCurrentQuestionIndex(0);
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
