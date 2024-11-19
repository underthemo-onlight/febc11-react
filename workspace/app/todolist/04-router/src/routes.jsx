import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@components/Layout";
import About from "@pages/About";
import Home from "@pages/Home";
import TodoList from "@pages/TodoList";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import TodoDetail from "@pages/TodoDetail";

// 장점
// 1. 즉시 사용 가능 (초기 로딩 시 모든 컴포넌트 포함)
// 2. 설정이 간단
// 3. 개발 시 디버깅 용이

// 단점
// 1. 초기 번들 크기가 큼
// 2. 초기 로딩 시간이 길어질 수 있음
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "list", element: <TodoList /> },
        { path: "add", element: <TodoAdd /> },
        {
          path: "list/:_id",
          element: <TodoDetail />,
          children: [{ path: "edit", element: <TodoEdit /> }],
        },
      ],
    },
  ],
  {
    future: {
      // 없으면 콘솔에 경고 표시
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
