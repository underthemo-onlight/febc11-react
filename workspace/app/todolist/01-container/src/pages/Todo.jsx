import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";

// 전체 레이아웃을 구성하는 프레젠테이션 컴포넌트
export default function Todo(props) {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={props.addItem} />
            <TodoList
              itemList={props.itemList}
              toggleDone={props.toggleDone}
              deleteItem={props.deleteItem}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
