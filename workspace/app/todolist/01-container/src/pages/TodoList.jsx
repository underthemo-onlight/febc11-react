import TodoItem from "./TodoItem";

<<<<<<< HEAD
// 할일 목록을 표시하는 컴포넌트
=======
>>>>>>> 53d42b6 (📝)
export default function TodoList({ itemList, toggleDone, deleteItem }) {
  const list = itemList.map((item) => (
    <TodoItem
      key={item._id}
      item2={item}
      toggleDone={toggleDone}
      deleteItem={deleteItem}
    />
  ));
  return <ul className="todolist">{list}</ul>;
}
