import { useState } from "react";
import "../../styles/UserForm/ChoiceOptions.css";
const ChoiceOptions = ({ onSetChoice, isValid}) => {
  const [checkOption, setCheckOption] = useState({
    excellent: false,
    good: false,
    fair: false,
    bad: false,
  });
  const selectExcellent = () => {
    setCheckOption({
      excellent: true,
      good: false,
      fair: false,
      bad: false,
    });
    onSetChoice('Excellent');
  };
  const selectGood = () => {
    setCheckOption({
      excellent: false,
      good: true,
      fair: false,
      bad: false,
    });
    onSetChoice('Good');
  
  };
  const selectFair = () => {
    setCheckOption({
      excellent: false,
      good: false,
      fair: true,
      bad: false,
    });
    onSetChoice('Fair');
  
  };
  const selectBad = () => {
    setCheckOption({
      excellent: false,
      good: false,
      fair: false,
      bad: true,
    });
    onSetChoice('Bad');
  };
  return (
    <div className={`choiceOptions ${!isValid && 'inValidUserInput'}`}>
      <div className="choiceOption">
        <input
          type="checkbox"
          checked={checkOption.excellent}
          onChange={selectExcellent}  
          id="excellent"
          name="choice"
        />
        <label>Excellent</label>
      </div>
      <div className="choiceOption">
        <input
          type="checkbox"
          checked={checkOption.good}
          onChange={selectGood}
          id="good"
        />
        <label>Good</label>
      </div>
      <div className="choiceOption">
        <input
          type="checkbox"
          checked={checkOption.fair}
          onChange={selectFair}
          id="fair"
          name="choice"
        />
        <label>Fair</label>
      </div>
      <div className="choiceOption">
        <input
          type="checkbox"
          checked={checkOption.bad}
          onChange={selectBad}
          id="bad"
          name="choice"
        />
        <label>Bad</label>
      </div>
    </div>
  );
};

export default ChoiceOptions;
