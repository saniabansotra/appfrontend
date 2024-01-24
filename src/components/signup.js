import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  return (
    <>
      <div>
        <h1>SIGNUP</h1>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        <input
          value={number}
          type="number"
          onChange={(e) => {
            setnumber(e.target.value);
          }}
          placeholder="Phone Number"
        />
        <br />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <div>
          <button class="button">Signup</button>
        </div>
        <h3>OR</h3>
      </div>
      <br />

      <Link to="/">login</Link>
    </>
  );
};
export default Signup;
