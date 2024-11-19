import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [cellphone, setCellphone] = useState("");
  const [user, setUser] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    let newErrors;
    if (user.name.trim() === "") {
      newErrors = {
        name: { message: "이름을 입력하세요." },
      };
    }

    if (newErrors) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <>
      <h1>05 회원가입 입력값 상태 관리</h1>

      <form>
        <label htmlFor="name">이름</label>
        <input id="name" className="name" value={name} />
        <br />
        <div>검증 실패 메세지</div>

        <label htmlFor="email">이메일</label>
        <input id="email" className="email" value={email} />
        <br />
        <div>검증 실패 메세지</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input id="cellphone" className="cellphone" value={cellphone} />
        <br />
        <div>검증 실패 메세지</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: {name}
        <br />
        이메일: {email}
        <br />
        휴대폰: {cellphone}
        <br />
      </p>
    </>
  );
}

export default App;
