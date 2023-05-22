import React from 'react';
import iconImage from '../../styles/icon.png';
import './NavMenu.css';

const NavMenu = ({
  isNavMenuOpen,
  closeNavMenu,
  setActiveButton,
  setFinishScreen,
  setCurrentQuestionIndex,
  setLastQuestionAnswered,
  setSelectedOption,
}) => {
  const goToMain = () => {
    closeNavMenu();
    setActiveButton(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
  };
  const goToTest = () => {
    closeNavMenu();
    setActiveButton(true);
    setLastQuestionAnswered(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
  };

  const testInfo = () => {
    closeNavMenu();
    setActiveButton(true);
    setLastQuestionAnswered(true);
    setFinishScreen(true);
  };

  return (
    <nav className={`menu-box ${isNavMenuOpen ? 'open' : ''}`} id="menu">
      <div className="menu-links">
        <a href="#" id="main_link" onClick={goToMain}>
          ГЛАВНАЯ
        </a>
        <a href="#" id="info" onClick={testInfo}>
          ИНФОРМАЦИЯ О ТЕСТЕ
        </a>
        <a href="#" id="go_to_test" onClick={goToTest}>
          ПРОЙТИ ТЕСТ
        </a>
      </div>
      <img
        src={iconImage}
        alt="close_image"
        className="close-icon"
        id="close-icon"
        onClick={closeNavMenu}
      />
    </nav>
  );
};

export default NavMenu;
