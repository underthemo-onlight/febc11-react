<<<<<<< HEAD
<<<<<<< HEAD
import PropTypes from "prop-types";
=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
=======
import PropTypes from "prop-types";
>>>>>>> 8d17eac (🚚)
import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

function Todo(props){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ props.addItem } />
            <TodoList itemList={ props.itemList } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } />
          </li>
        </ul>
      </div>
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d17eac (🚚)
Todo.propTypes = {
  itemList: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

<<<<<<< HEAD
=======
>>>>>>> ea8cc6f (ins 폴더 재생성)
=======
>>>>>>> 8d17eac (🚚)
export default Todo;