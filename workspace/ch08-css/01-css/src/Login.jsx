import Button from "./components/Button";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="input" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="input" required />
        </div>
        <Button bg="gray" color="blue">
          회원가입
        </Button>
        <Button bg="gray" color="blue">
          카카오 로그인
        </Button>
        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
}

export default Login;
