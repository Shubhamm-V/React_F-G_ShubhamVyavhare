import { useEffect } from "react";
import { Fragment, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { isValidActions, userActions } from "../../redux/redux";
import "../../styles/UserForm/UserInput.css";
const UserInput = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.savePhone(phone));
  }, [phone, dispatch]);

  const userInfo = useSelector((state) => state.isValid);
  const nameChangeHandler = (event) => {
    dispatch(userActions.saveName(event.target.value));
  };
  const emailChangeHandler = (event) => {
    dispatch(userActions.saveEmail(event.target.value));
  };
  const nameFocusHandler = () => {
    dispatch(isValidActions.isValidName(true));
  };
  const emailFocusHandler = () => {
    dispatch(isValidActions.isValidEmail(true));
  };

  return (
    <Fragment>
      <div className="userInput">
        <div className="userInput__name">
          <label htmlFor="name">
            Customer Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="E.g. join show"
            onChange={nameChangeHandler}
            onFocus={nameFocusHandler}
          />
          {!userInfo.customerName && (
            <div className="invalidInput">
              <p>
                {" "}
                <span>ⓘ</span> Please enter the value for the above field
              </p>
            </div>
          )}
        </div>
        <div className="userInput__email">
          <label htmlFor="name">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="name"
            placeholder="E.g. abc@gmail.com"
            onChange={emailChangeHandler}
            onFocus={emailFocusHandler}
          />
          {!userInfo.email && (
            <div className="invalidInput">
              <p>
                {" "}
                <span>ⓘ</span> Please enter valid Email
              </p>
            </div>
          )}
        </div>

        <div className="userInput__phone">
          <label htmlFor="phone">
            Phone<span>*</span>{" "}
          </label>
          <PhoneInput
            className="phoneInput"
            placeholder="9999999999"
            defaultCountry="IN"
            onChange={setPhone}
          />
          {!userInfo.phone && (
            <div className="invalidInput">
              <p>
                {" "}
                <span>ⓘ</span> Please enter Valid Phone Number
              </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UserInput;
