import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="todoapp">
      <Header />

      {/* Outlet 
        React Router의 중첩 라우팅을 구현할 때 사용하는 컴포넌트
        부모 라우트에서 자식 라우트의 엘리먼트가 어디에 렌더링될지 지정하는 역할
        장점: 레이아웃 코드 재사용, 일관된 UI 구조 유지, 중첩 라우팅 구현 용이, 동적 컨텐츠 관리 용이
      */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
