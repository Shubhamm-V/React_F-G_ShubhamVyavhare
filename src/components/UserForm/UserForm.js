import UserChoices from "./UserChoices";
import UserInput from "./UserInput";
import "../../styles/UserForm/UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import { isSubmitActions, isValidActions } from "../../redux/redux";
const UserForm = () => {
  const userData = useSelector((state) => state.userInfo);
  const isUserValid = useSelector((state) => state.isValid);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(isValidActions.isValidName(userData.customerName.trim() !== ""));
    dispatch(isValidActions.isValidEmail(userData.email.includes("@")));
    dispatch(isValidActions.isValidPhone(userData.phone.trim() !== ""));
    dispatch(isValidActions.isValidQuality(userData.quality.trim() !== ""));
    dispatch(isValidActions.isValidBeverage(userData.beverage.trim() !== ""));
    dispatch(isValidActions.isValidClean(userData.clean.trim() !== ""));
    dispatch(
      isValidActions.isValidExperience(userData.experience.trim() !== "")
    );

    if (
      userData.customerName.trim() !== "" &&
      userData.email.includes("@") &&
      userData.phone.trim() !== "" &&
      userData.quality.trim() !== "" &&
      userData.beverage.trim() !== "" &&
      userData.clean.trim() !== "" &&
      userData.experience.trim() !== ""
    ) {
      let storedData = localStorage.getItem("reviews");
      let newUserData = [];
      if (storedData != null) {
        newUserData = JSON.parse(storedData);
      }
      newUserData.push(userData);
      localStorage.setItem("reviews", JSON.stringify(newUserData));
      dispatch(isSubmitActions.submit());
      console.log("Form Submitted");
    } else {
      console.log(isUserValid);
    }
  };
  return (
    <form className="userForm" onSubmit={submitHandler}>
      <div className="formHeader">
        <h1> Aromatic Bar </h1>
      </div>
      <div className="userInfo">
        <UserInput />
        <UserChoices />
      </div>
      <div className="formSubmit">
        <button type="submit">Submit Review</button>
      </div>
    </form>
  );
};

export default UserForm;
