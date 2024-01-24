import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />

        <input
          type="password"
          value={email}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <div class="button">
          <button>Login</button>
        </div>
        <h3>OR</h3>
      </div>
      <br />

      <Link to="/signup">Signup Page</Link>
    </>
  );
};
export default Login;
