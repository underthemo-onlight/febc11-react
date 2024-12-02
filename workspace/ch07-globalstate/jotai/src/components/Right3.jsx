import { useEffect } from "react";
import { counterAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  const [count, setCount] = useAtom(counterAtom);

  const countUp = function (step) {
    setCount((count) => count + step);
  };

  const countDown = function (step) {
    setCount((count) => count - step);
  };

  const reset = function () {
    setCount(0);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => {}}>+1</button>
    </div>
  );
}

export default Right3;
