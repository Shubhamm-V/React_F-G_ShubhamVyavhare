import "./App.css";
import Result from "./components/Result/Result";
import SuccessForm from "./components/UserForm/SuccessForm";
import UserForm from "./components/UserForm/UserForm";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const isSubmmited = useSelector((state) => state.isSubmit.isSubmitted);
  return (
    <div className="App-container">
      <Routes>
        <Route
          path="/"
          element={!isSubmmited ? <UserForm /> : <SuccessForm />}
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
