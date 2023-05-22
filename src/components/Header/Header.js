import { menuImage, headerImage } from '../../styles';
import './Header.css';

const Header = ({ toggleNavMenu, activeButton, finishScreen }) => {
  let headerText = 'ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ';

  if (finishScreen) {
    headerText = 'ГОТОВО';
  }

  return (
    <header>
      <img
        src={menuImage}
        alt="menu_image"
        className="menu-icon"
        id="menu-icon"
        onClick={toggleNavMenu}
      />
      <img
        src={headerImage}
        alt="img_rain_bk3"
        className={`header_image ${activeButton ? 'open' : ''}`}
      />
      <div className={`header_text ${activeButton ? 'open' : ''}`}>
        {headerText}
      </div>
    </header>
  );
};

export default Header;
