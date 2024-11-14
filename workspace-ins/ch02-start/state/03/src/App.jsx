<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";

function App(){

  const [position, setPosition] = useState({ x: 50, y: 50 });

=======
function App(){
  
>>>>>>> 8246e5e (🚧)
=======
import { useState } from "react";

function App(){

  const [position, setPosition] = useState({ x: 100, y: 250 });

>>>>>>> fb6cdec (🚧)
  return (
    <>
      <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
<<<<<<< HEAD
<<<<<<< HEAD
        onPointerMove={ event => {
          // 속성을 직접 수정하면 리렌더링되지 않음
          // position.x = event.clientX;
          // position.y = event.clientY;
          // setPosition(position);

          const newPosition = { x: event.clientX, y: event.clientY - 80 };
          setPosition(newPosition);

          console.log(position);
        } }
=======
>>>>>>> 8246e5e (🚧)
=======
        onPointerMove={ event => {
          position.x = event.clientX;
          position.y = event.clientY;
        } }
>>>>>>> fb6cdec (🚧)
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
<<<<<<< HEAD
<<<<<<< HEAD
          transform: `translate(${position.x-10}px, ${position.y-10}px)`,
=======
          transform: `translate(${10}px, ${10}px)`,
>>>>>>> 8246e5e (🚧)
=======
          transform: `translate(${position.x-10}px, ${position.y-10}px)`,
>>>>>>> fb6cdec (🚧)
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    </>
  );
}

export default App;