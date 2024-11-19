<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
=======
import PropTypes from "prop-types";
>>>>>>> 8d17eac (🚚)
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
<<<<<<< HEAD
=======
>>>>>>> 8d17eac (🚚)
TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

<<<<<<< HEAD
=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
=======
>>>>>>> 8d17eac (🚚)
export default TodoList;