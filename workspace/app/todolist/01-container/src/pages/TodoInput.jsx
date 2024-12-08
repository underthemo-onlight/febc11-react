import { useState } from "react";

<<<<<<< HEAD
// 새로운 할일 입력을 담당하는 컴포넌트
=======
>>>>>>> 53d42b6 (📝)
export default function TodoInput({ addItem }) {
  const [title, setTitle] = useState("");
  const [nextId, setNextId] = useState(4);

<<<<<<< HEAD
  // 1. 텍스트 입력
  // onChange -> setTitle -> title 상태 업데이트
=======
>>>>>>> 53d42b6 (📝)
  const handleAdd = () => {
    if (title.trim() !== "") {
      const item = { _id: nextId, title, done: false };
      addItem(item);

      setNextId(nextId + 1);
      setTitle("");
    }
  };

<<<<<<< HEAD
  // 2-A. Enter 키 입력
  // onKeyUp -> handleKeyUp -> handleAdd -> addItem
  // 2-B. 버튼 클릭
  // onClick -> handleAdd -> addItem
=======
>>>>>>> 53d42b6 (📝)
  const handleKeyUp = (event) => {
    if (event.key === "Enter") handleAdd();
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        autoFocus
        onKeyUp={handleKeyUp}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}
