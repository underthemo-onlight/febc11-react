import { counterState } from "@recoil/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function Right3() {
  useEffect(() => {
    console.log("      # Right3 렌더링.");
  });

  // getter, setter 모두 사용 (구독) L, R 모두 리랜더링
  // const [count, setCount] = useRecoilState(counterState);

  // setter 사용(구독하지 않음) L 만 렌더링.
  const setCount = useRecoilState(counterState);
  const countUp = (step) => {
    setCount((count) => count + step);
  };

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
    </div>
  );
}

export default Right3;
