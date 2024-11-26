import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Lazy 함수를 사용시 dynamic import를 사용해 컴포넌트를 렌더링 => 초기 렌더링 지연시간 감소
// React.lazy로 감싼 컴포넌트는 단독으로 쓰일 수는 없고, React.suspense 컴포넌트의 하위에서 렌더링을 해야 한다.

// Lazy-route 로딩 장점:
// 1. 초기 번들 크기 감소
// 2. 필요한 컴포넌트만 로드
// 3. 초기 로딩 시간 단축

// 단점
// 1. 추가 설정 필요 (Suspense)
// 2. 컴포넌트 전환 시 약간의 지연 가능

const Layout = lazy(() => import("@components/Layout"));
const About = lazy(() => import("@pages/About"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const Home = lazy(() => import("@pages/Home"));
const TodoList = lazy(() => import("@pages/TodoList"));
const TodoAdd = lazy(() => import("@pages/TodoAdd"));
const TodoEdit = lazy(() => import("@pages/TodoEdit"));
const TodoDetail = lazy(() => import("@pages/TodoDetail"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
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
      // 없으면 콘솔에 경고 표시, 마이그레이션에 용이
      v7_fetcherPersist: true, // 페이지 이동 시에도 fetcher 상태 유지, 데이터 로딩 상태 개선
      v7_normalizeFormMethod: true, // form 메서드 정규화, HTTP 메서드 일관성 유지
      v7_partialHydration: true, // 부분적 하이드레이션, 초기 로딩 성능 개선
      v7_relativeSplatPath: true, // 상대 경로 splat 처리, URL 파라미터 처리 향상
      v7_skipActionErrorRevalidation: true, // 액션 에러 재검증 스킵, 성능 최적화
    },
  }
);

// 앱에 코드 분할을 도입할 곳을 결정하는 것은 사실 까다롭기 때문에,
// 중간에 적용시키는 것보다는 웹 페이지를 불러오고 진입하는 단계인 Route에 이 두 기능을 적용시키는 것이 좋다.

export default router;

// 참고 자료 출처
// https://velog.io/@abc2752/React.lazy%EC%99%80-Suspense
