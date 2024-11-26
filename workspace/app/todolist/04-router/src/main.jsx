import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// StrictMode
// React의 개발 모드에서 잠재적인 문제를 찾아내기 위한 도구
// 안전하지 않은 생명주기 메서드 확인, 레거시 문자열 ref 사용 금지, 예상치 못한 부작용 감지(두 번 실행), 중복렌더링으로 버그 감지(두 번 실행)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
