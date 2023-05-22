import React from 'react';
import {
  elipseImage,
  iconImage,
  quotes_1,
  quotes_2,
  brain_logo,
  lightning_1,
  lightning_2,
} from '../../styles';
import './MainContent.css';

const MainContent = ({ toggleMenu, activeButton }) => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <main>
      <div className={`container ${activeButton ? 'open' : ''}`}>
        <div className="text_container_one">
          <div className="container_one_text_one">
            <h1>Пройдите точный и быстрый</h1>
          </div>
          <div className="container_one_text_two">
            <h2>ТЕТС НА</h2>
          </div>
          <div className="container_one_text_three">
            <h2>
              ОПРЕДЕЛЕНИЕ
              <br /> IQ
            </h2>
          </div>
          <div className="container_one_button">
            <button className="button" onClick={toggleMenu}>
              ПРОЙТИ ТЕСТ
            </button>
          </div>
          <div className="container_one_text_four">
            <h4>
              <span className="yellow">
                И получите рекомендации
                <br /> по развитию своего интеллекта
              </span>
              <br />
              и улучшению финансового
              <br /> благосостояния и личной жизни
            </h4>
          </div>
          <div className="container_one_elipse_image">
            <img className="elipse_image" src={elipseImage} alt="Ellipse" />
            <img className="elipse_icon" src={iconImage} alt="icon-image" />
          </div>
          <div
            className="container_one_text_five"
            onClick={handleScrollToBottom}
          >
            <h5>Подробнее</h5>
          </div>
        </div>
        <div className="text_container_two">
          <div className="container_two_image1">
            <img src={quotes_1} alt="quotes_1" />
          </div>
          <div className="container_two_text_one">
            <h1>
              Профессиональный IQ-тест позволяет не только определить
              коэффициент вашего интеллекта, но и выработать список рекомендаций
              для повышения этого показателя.
            </h1>
          </div>
          <div className="container_two_image2">
            <img src={quotes_2} alt="quotes_2" />
          </div>
        </div>
        <div className="text_container_three">
          <div className="container_three_text_one">
            <h5>
              Также по результатам теста{' '}
              <span className="uppercase bold">вы получите</span> подробные{' '}
              <span className="bold uppercase">советы</span> по определению
              наиболее перспективной{' '}
              <span className="bold uppercase">для вашего типа</span>{' '}
              <span className="bold">интеллекта</span>{' '}
              <span className="bold uppercase">сферы деятельности</span> которая
              принесет вам скорейший финансовый результат.
            </h5>
          </div>
          <div className="container_three_image1">
            <img src={brain_logo} alt="brain_logo" />
          </div>
          <div className="container_three_button">
            <button className="button" onClick={toggleMenu}>
              ПРОЙТИ ТЕСТ
            </button>
          </div>
        </div>
        <div className="text_container_four">
          <div className="lightning_one">
            <img src={lightning_1} alt="lightning_1" />
          </div>
          <div className="lightning_two">
            <img src={lightning_2} alt="lightning_2" />
          </div>

          <div className="container_four_text_one">
            <h6>
              Прохождение теста займет у вас не более{' '}
              <span className="yellow">12 минут</span>, а его результаты вы
              сможете <span className="yellow">использовать всю жизнь.</span>
            </h6>
          </div>
          <div className="container_four_text_two">
            <h2>
              Профессиональная интерпретация и детально{' '}
              <span className="bold">проработанные рекомендации</span> позволят
              вам качественно{' '}
              <span className="bold">изменить все аспекты своей жизни:</span> от
              финансового до любовного.
            </h2>
          </div>
          <div className="container_four_button">
            <button className="button" onClick={toggleMenu}>
              ПРОЙТИ ТЕСТ
            </button>
          </div>
          <div className="container_four_text_three">
            <h3>&copy; 2019</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
