import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
    </>
  );
}

export default App;
