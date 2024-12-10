import FetchAsYouRender, { Replies } from "./03-FetchAsYouRender";
import { Suspense } from "react";
import { PostList } from "./PostList";

function App() {
  return (
    <>
      <h1>05 데이터 패칭 패턴 - Fetch-as-you-render</h1>
      <Suspense fallback={<div>게시물 목록 조회중...</div>}>
        <PostList />
        <Suspense fallback={<div>게시물 목록 조회중...</div>}>
          <FetchAsYouRender />
          <Suspense fallback={<div>게시물 목록 조회중...</div>}>
            <Replies />
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}

export default App;
