import useAxiosInstance from "@hooks/useAxiosInstance";
import useFetch from "@hooks/useFetch";
import TodoListItem from "@pages/TodoListItem";
import Pagination from "@components/Pagination";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../Pagination.css";

// const dummyData = {
//   items: [{
//     _id: 1,
//     title: '잠자기',
//   }, {
//     _id: 2,
//     title: '자바스크립트 복습',
//     done: true,
//   }]
// };

function TodoList() {
  const [data, setData] = useState();
  const searchRef = useRef("");

  // 쿼리 스트링 정보를 읽거나 설정
  // /list?keyword=환승&page=3 => new URLSearchParams('keyword=환승&page=3')
  const [searchParams, setSearchParams] = useSearchParams(); //getter, setter

  const params = {
    keyword: searchParams.get("keyword"),
    page: searchParams.get("page") || 1,
    limit: 20,
  };

  // useEffect(() => {
  //   setData(dummyData);
  // }, []); // 마운트된 후에 한번만 호출

  // API 서버에서 목록 조회
  // const { data } = useFetch({ url: "/todolist" });
  // 쓰기는 쉽지만, 훅이기 때문에 특정 이벤트 핸들러에서 사용할 수 없다.
  // fetchList로 사용.

  // axios 인스턴스
  const axios = useAxiosInstance();

  // 컴포넌트 마운트 직후와 삭제 후에 목록 조회를 다시 해야하므로 목록 조회 기능을 수행하는 함수를 만듦
  const fetchList = async () => {
    const res = await axios.get("/todolist", { params });
    setData(res.data);
  };

  useEffect(() => {
    fetchList();
  }, [searchParams]); //[]일 땐 최초 마운트 후에 호출. 업데이트 안됨. 하지만 검색어가 바꼈을 때 또 호출돼야함. 고로 dependency 요구됨/

  // 삭제 작업
  const handleDelete = async (_id) => {
    try {
      // TODO: API 서버에 삭제 요청
      await axios.delete(`/todolist/${_id}`);
      alert("할일이 삭제 되었습니다.");

      // TODO: 목록을 다시 조회
      fetchList();
    } catch (err) {
      console.error(err);
      alert("할일 삭제에 실패했습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  // 검색
  const handleSearch = (e) => {
    e.preventDefault();
    const inputKeyword = searchRef.current.value;
    setSearchParams(new URLSearchParams(`keyword=${inputKeyword}`));
    // 검색한 뒤, useEffect-fetchList가 호출되지 않는다.
  };

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search" onSubmit={handleSearch}>
          <input type="text" autoFocus ref={searchRef} />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>

      <Pagination
        totalPages={data?.pagination.totalPages}
        current={data?.pagination.page}
      />
    </div>
  );
}

export default TodoList;
