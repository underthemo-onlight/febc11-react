import { useState } from "react";
import { produce } from "immer";
import Todo from "./Todo";

// 상태 관리와 비즈니스 로직을 담당하는 컨테이너 컴포넌트
// TodoContainer (상태 관리)
//     └─> Todo (레이아웃)
//         ├─> TodoInput (입력)
//         └─> TodoList (목록)
//             └─> TodoItem (개별 항목)
export default function TodoContainer() {
  // 샘플 목록
  const [itemList, setItemList] = useState([
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ]);

  // 할일 추가
  const addItem = (item) => {
    // 데이터 갱신(상태 변경)
    const newItemList = [...itemList, item]; // 객체일 경우 새로운 객체로 만들어야 화면 갱신이 됨
    setItemList(newItemList); // setter를 이용해야 화면 갱신이 됨
  };

  // 할일 완료/미완료 처리
  const toggleDone = (_id) => {
    // 데이터 갱신(상태 변경)
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find((item) => item._id === _id);
      item.done = !item.done;
    });
    setItemList(newItemList);
    console.log("예전 itemList", itemList);
    console.log("새로 itemList", newItemList);
  };

  // 할일 삭제
  const deleteItem = (_id) => {
    // 데이터 갱신(상태 변경)
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  return (
    <Todo
      itemList={itemList}
      addItem={addItem}
      toggleDone={toggleDone}
      deleteItem={deleteItem}
    />
  );
}
