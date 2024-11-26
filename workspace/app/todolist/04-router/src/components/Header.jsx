<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import { Link, NavLink } from "react-router-dom";
>>>>>>> a0a35b6 (Router, Lazy-Router)

// NavLink
// React Router에서 제공하는 특별한 버전의 Link 컴포넌트
// 일반 Link와의 가장 큰 차이점은 현재 활성화된 링크에 스타일을 적용할 수 있다 (isActive)

function Header() {
  return (
    <header>
      <h1>Todo List</h1>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="list"
                className={({ isActive }) => (isActive ? "menu-dark" : "menu")}
              >
                TodoList
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
