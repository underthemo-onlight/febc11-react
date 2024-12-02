import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { countUp, countReset, countDown } from "../redux-toolkit/store";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  // 상태값 수정
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      {/* <button
        onClick={() => {
          dispatch();
        }}
      >
        +1
      </button> */}

      {/* redux */}
      {/* <button onClick={() => dispatch(counterActiveCreator.countDown(1))}>
        -1
      </button>
      <button onClick={() => dispatch(counterActiveCreator.countReset())}>
        0
      </button>
      <button onClick={() => dispatch(counterActiveCreator.countUp(2))}>
        -2
      </button> */}

      {/* redux toolkit */}
      <button onClick={() => dispatch(countDown(1))}>-1</button>
      <button onClick={() => dispatch(countReset(0))}>0</button>
      <button onClick={() => dispatch(countUp(2))}>+2</button>
    </div>
  );
}

export default Right3;
