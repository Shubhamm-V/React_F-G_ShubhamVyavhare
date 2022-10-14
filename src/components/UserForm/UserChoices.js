import ChoiceOptions from "./ChoiceOptions";
import "../../styles/UserForm/UserChoices.css";
import { useDispatch, useSelector } from "react-redux";
import { isValidActions, userActions } from "../../redux/redux";

const UserChoices = () => {
  const userInfo = useSelector((state) => state.isValid);
  const dispatch = useDispatch();
  const getQuality = (val) => {
    dispatch(userActions.saveQuality(val));
    dispatch(isValidActions.isValidQuality(true));
  };
  const getBeverage = (val) => {
    dispatch(userActions.saveBeverage(val));
    dispatch(isValidActions.isValidBeverage(true));
  };
  const getClean = (val) => {
    dispatch(userActions.saveClean(val));
    dispatch(isValidActions.isValidClean(true));
  };
  const getExperience = (val) => {
    dispatch(userActions.saveExperience(val));
    dispatch(isValidActions.isValidExperience(true));
  };
  return (
    <div className="userChoices">
      <div className="userChoice">
        <label>
          Please rate quality of the service you received from host
          <span>*</span>
        </label>
        <ChoiceOptions
          onSetChoice={getQuality}
          isValid={userInfo.isValidQuality}
        />
        {!userInfo.quality && (
          <div className="invalidInput">
            <p>
              {" "}
              <span>ⓘ</span> Please enter the value for the above field
            </p>
          </div>
        )}
      </div>
      <div className="userChoice">
        <label>
          Please rate quality of your beverage<span>*</span>
        </label>
        <ChoiceOptions
          onSetChoice={getBeverage}
          isValid={userInfo.isValidBeverage}
        />
        {!userInfo.beverage && (
          <div className="invalidInput">
            <p>
              {" "}
              <span>ⓘ</span> Please enter the value for the above field
            </p>
          </div>
        )}
      </div>
      <div className="userChoice">
        <label>
          Was our restaurant clean?<span>*</span>
        </label>
        <ChoiceOptions onSetChoice={getClean} isValid={userInfo.isValidClean} />
        {!userInfo.clean && (
          <div className="invalidInput">
            <p>
              {" "}
              <span>ⓘ</span> Please enter the value for the above field
            </p>
          </div>
        )}
      </div>
      <div className="userChoice">
        <label>
          Please rate our overall dinning experience<span>*</span>
        </label>
        <ChoiceOptions
          onSetChoice={getExperience}
          isValid={userInfo.isValidExperience}
        />
        {!userInfo.experience && (
          <div className="invalidInput">
            <p>
              {" "}
              <span>ⓘ</span> Please enter the value for the above field
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserChoices;
