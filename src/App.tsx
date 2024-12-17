import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "./store";

import "./App.css";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(incrementByAmount(count))}>
        +{count}
      </button>
    </>
  );
}

export default App;
