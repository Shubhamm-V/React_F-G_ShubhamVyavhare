import { faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isSubmitActions } from "../../redux/redux";
import "../../styles/Result/TableHeader.css";
const TableHeader = () => {
  let storedData = localStorage.getItem("reviews");
  let customerData = [];
  if (storedData == null) {
    customerData = [];
  } else {
    customerData = JSON.parse(storedData);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addNewHandler = () => {
    dispatch(isSubmitActions.notSubmit());
    navigate("/");
  };
  return (
    <div className="tableHeader">
      <div className="tableHeader__text">
        <h3>Aromatic Bar</h3>
        <p>{customerData.length} Records found 0 filters applied</p>
      </div>
      <div className="tableHeader__options">
        <div className="tableHeader__searchInput">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="tableHeader__referesh">
          <FontAwesomeIcon icon={faRefresh} />
        </div>
        <button className="searchButton" onClick={addNewHandler}>
          Add New
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
