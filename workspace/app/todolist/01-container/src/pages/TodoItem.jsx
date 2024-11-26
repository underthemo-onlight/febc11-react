import PropTypes from "prop-types";

<<<<<<< HEAD
// 개별 할일 항목을 표시하는 컴포넌트
=======
>>>>>>> 53d42b6 (📝)
export default function TodoItem({ item, toggleDone, deleteItem }) {
  return (
    <li>
      <span>{item._id}</span>
      <span onClick={() => toggleDone(TodoItem._id)}>
        {item.done ? <s>{item.title}</s> : item.title}
      </span>
      <button type="button" onClick={() => deleteItem(item._id)}>
        삭제
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  //item: PropTypes.object.isRequired,
  item: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }),
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
