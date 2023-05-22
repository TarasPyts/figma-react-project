import React, { useState } from 'react';
import textConstants from '../../variables/variables';
import './FinishScreen.css';
import Timer from '../Timer/Timer';
import { image4, image5, image6 } from '../../styles';

function FinishScreen() {
  const [characterData, setCharacterData] = useState(null);

  const handleClick = () => {
    fetch('https://swapi.dev/api/people/1/')
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data);
      });
  };

  return (
    <div className="finish_style">
      <div>
        <h5>
          {characterData ? `Your result:` : textConstants.RESULT_CALCULATION}
        </h5>
      </div>
      <div>
        <h5>
          {characterData
            ? `Hello ${characterData.name}`
            : textConstants.PERSON_RELATION}
        </h5>
      </div>
      <div>
        <h5>
          {characterData
            ? `Your height is: ${characterData.height} cm`
            : textConstants.RESULT_RECEIVING}
        </h5>
      </div>
      <div>
        <h5>
          {characterData
            ? `Your mass is: ${characterData.mass} kg`
            : textConstants.RESULT_ACCESS}
        </h5>
      </div>
      <div>
        <h5>
          {characterData
            ? `Your hair color is: ${characterData.hair_color}`
            : textConstants.RESULT_AVAILABLE}
        </h5>
      </div>
      <div>
        <h5>
          {characterData ? (
            `Your skin color is: ${characterData.skin_color}`
          ) : (
            <Timer />
          )}
        </h5>
      </div>
      <div
        style={
          characterData ? { backgroundColor: characterData.eye_color } : {}
        }
      >
        {characterData ? (
          <h5>{`Your eye color is: ${characterData.eye_color}`}</h5>
        ) : (
          <button onClick={handleClick}>
            <img src={image4} alt="image4" />
            <h5>{textConstants.CALL_TO_GET_RESULT}</h5>
          </button>
        )}
      </div>
      <div>
        <h5>{textConstants.QUOTE}</h5>
      </div>
      <div>
        <img src={image5} alt="image5" />
      </div>
      <div>
        <img src={image6} alt="image6" />
      </div>
    </div>
  );
}

export default FinishScreen;
