import { useState } from "react";

<<<<<<< HEAD
<<<<<<< HEAD
// 모듈 스코프 변수 X
// let count = 0;
export default function Message(){
  // 지역 변수 X
  // let count = 0;

  // state 사용
  const [count, setCount] = useState(0);
=======

let count = 0;

=======
// 모듈 스코프 변수 X
// let count = 0;
>>>>>>> 388055e (✨)
export default function Message(){
  // 지역 변수 X
  // let count = 0;

<<<<<<< HEAD
  console.log('Message 렌더링');

>>>>>>> 44c0fc0 (🚧)
=======
  // state 사용
  const [count, setCount] = useState(0);
>>>>>>> 388055e (✨)
  const [msg, setMsg] = useState('');

  const handleChange = (event) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
<<<<<<< HEAD
<<<<<<< HEAD
    setCount(count + 1);
=======
    count++;
>>>>>>> 44c0fc0 (🚧)
=======
    setCount(count + 1);
>>>>>>> 388055e (✨)
  };

  return (
    <div>
      <input type="text" onChange={ handleChange } />
      <br/>
      <span>입력 메세지: { msg }</span>
      <br/>
      <span>입력 횟수: { count }</span>
    </div>
  );
}
