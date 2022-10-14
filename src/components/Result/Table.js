import "../../styles/Result/Table.css";
import TableData from "./TableData";
const Table = () => {
  let storeData = localStorage.getItem("reviews");
  let customerData = [];
  if (storeData == null) {
    customerData = [];
  } else {
    customerData = JSON.parse(storeData);
  }
  return (
    <div className="customerData">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Form Details</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Please rate quality of service from your host</th>
            <th>Please</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((data, key) => (
            <TableData key={key} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
