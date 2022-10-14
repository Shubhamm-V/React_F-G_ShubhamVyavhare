import { useDispatch } from "react-redux";
import { userActions } from "../../redux/redux";

const TableData = ({ data }) => {
  const dispatch = useDispatch();
  const checkReviewHandler = (event) => {
    dispatch(userActions.checkReview(event.target.checked));
  };
  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkReviewHandler} />
      </td>
      <td>View Details</td>
      <td>{data.customerName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.quality}</td>
      <td></td>
    </tr>
  );
};

export default TableData;
