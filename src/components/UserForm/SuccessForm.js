import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/UserForm/SuccessForm.css";
import { useNavigate } from "react-router-dom";
const SuccessForm = () => {
  const navigate = useNavigate();
  const submitDataHandler = (event) => {
    event.preventDefault();
    navigate("/result");
  };
  return (
    <div className="container">
      <div className="successForm">
        <FontAwesomeIcon icon={faCheckCircle} className="success" />
        <h2>Thank you for providing the feedback</h2>
        <p>We will work towards improving your experience</p>
        <button onClick={submitDataHandler}>Close</button>
      </div>
    </div>
  );
};

export default SuccessForm;
