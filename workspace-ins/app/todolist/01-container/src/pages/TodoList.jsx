<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
import TodoItem from "@pages/TodoItem";

function TodoList({ itemList, toggleDone, deleteItem }){
  const list = itemList.map(item => <TodoItem key={ item._id } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

<<<<<<< HEAD
TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
export default TodoList;