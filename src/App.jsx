import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { incCount } from "./Services/Action/counterAction";

function App() {
  const dispatch = useDispatch();
  const { count, isLoading } = useSelector((state) => state.counterReducer);

  const handleClick = () => {
    dispatch(incCount());
  };
  return (
    <>
      <div className="card">
        <button onClick={handleClick}> { isLoading ? "Loading..." :  `count is ${count}` }</button>
      </div>
    </>
  );
}

export default App;
