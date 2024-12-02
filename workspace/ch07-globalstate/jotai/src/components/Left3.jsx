import { useEffect } from "react";
import { counterAtom } from "../../jotai/atoms";
import { useAtom } from "jotai";

function Left3() {
  useEffect(() => {
    console.log("      # Left3 렌더링.");
  });

  const [count] = useAtom(counterAtom);

  return (
    <div>
      <h3>Left3</h3>
      <span>0</span>
    </div>
  );
}

export default Left3;
