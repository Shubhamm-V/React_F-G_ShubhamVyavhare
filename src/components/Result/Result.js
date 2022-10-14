import "../../styles/Result/Result.css";
import TableHeader from "./TableHeader";
import Table from "./Table";
const Result = () => {
  const deleteReviewHandler = () => {
    console.log("Deleted");
  };
  return (
    <div>
      <div className="tableInfo">
        <TableHeader />
        <Table />
      </div>
      <div className="deleteSection">
        <button onClick={deleteReviewHandler}>Delete</button>
      </div>
    </div>
  );
};
export default Result;
