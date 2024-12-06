import FetchOnRender from "./01-FetchOnRender";
import FetchThenRender from "./02-FetchThenRender";
import axios from "axios";
import { useEffect, useState } from "react";

// 게시물 목록 조회 API 호출
export default function fetchPostList() {
  return axios.get("https://11.fesp.shop/posts?type=brunch", {
    headers: {
      "client-id": "00-brunch",
    },
  });
}

// 게시글 목록 조회 페이지
export function PostList() {
  const [data, setData] = useState(); //3. 다시 렌더링이 된다.
  useEffect(() => {
    //1. 렌더링 후에 데이터를 가져온다.
    fetchPostList().then((res) => {
      setData(res.data); //2. 데이터를 가져와 상태를 변경한다.
    });
  }, []);

  if (!data) {
    return <div>게시물 목록 로딩중 ... </div>;
  }

  return (
    <>
      <h2>게시물 {data.item.length}건이 있습니다</h2>
      <h3>Fetch-on-render 방식</h3>
      <FetchOnRender />

      <h3>Fetch-then-render 방식</h3>
      <FetchThenRender />
    </>
  );
}
