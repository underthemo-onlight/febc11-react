import React from "react";
<<<<<<< HEAD
import Button from "./Button";
=======
>>>>>>> b2d0675 (✨ vite counter 실습)

function Counter(){
  let [count, setCount] = React.useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = event => {
    setCount(0);
  };

  return (
    <div id="counter">
<<<<<<< HEAD
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ (event) => handleReset(event) }>0</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
=======
      <button type="button" onClick={ handleDown }>-</button>
      <button type="button" onClick={ (event) => handleReset(event) }>0</button>
      <button type="button" onClick={ handleUp }>+</button>
>>>>>>> b2d0675 (✨ vite counter 실습)
      <span>{ count }</span>
    </div>
  );
}

export default Counter;