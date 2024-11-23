import TodoItem from "./TodoItem";

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
