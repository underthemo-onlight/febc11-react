import { useRouteError } from "react-router-dom";

// useRouteError
// React Router의 에러 처리를 위한 훅으로, 라우팅 중 발생한 에러 정보를 가져올 수 있습니다
// 속성: error.message, error.status, error.statusText, error.stack

// 보안이 문제될 수 있으니, 상세 에러 정보를 숨겨줄 것
// const showDetailedError = process.env.NODE_ENV === 'development';

function ErrorPage() {
  const err = useRouteError();
  const message =
    err.status === 404
      ? "존재하지 않는 페이지입니다."
      : "예상하지 못한 에러가 발생했습니다.";

  return (
    <>
      <div className="todo">
        <h2>에러 발생</h2>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
