import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  return (
    <>
      <h1
        class="logo"
        style={{
          color: "rgb(184, 183, 183)",
          padding: "5px",
          marginLeft: "7px",
        }}
      >
        NEXUS
      </h1>
      <div class="signup">
        <h1 style={{ color: "rgb(184, 183, 183)" }}>SIGNUP</h1>
        {/* <label for="name">Name:</label> */}
        <input
          style={{
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            boxShadow: "1px 1px 10px #fa7d868c",
          }}
          type="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
        />
        <br />

        <input
          style={{
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            boxShadow: "1px 1px 10px #fa7d868c",
          }}
          value={email}
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        {/* <label for="phonenumber">Phone Number:</label> */}
        <input
          style={{
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            boxShadow: "1px 1px 10px #fa7d868c",
          }}
          value={phonenumber}
          type="number"
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
          placeholder="Phone Number"
        />
        <br />
        {/* <label for="passowrd">Passowrd:</label> */}
        <input
          style={{
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            boxShadow: "1px 1px 10px #fa7d868c",
          }}
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        {/* <label for="age">Age:</label> */}
        {/* <input
          type="checkbox"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        /> */}
        <div>
          <button
            type="button"
            class="button"
            style={{
              border: "none",
              color: "rgb(184, 183, 183)",
              width: "100%",
              padding: "8px",
              backgroundColor: "#fa7d868c",
              borderRadius: "50%",
              padding: "15px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Signup
          </button>
        </div>
        <h3 style={{ display: "flex", flexDirection: "row" }}>
          Registered??---{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ color: "#fa7d868c " }}>login</span>
          </Link>
        </h3>
      </div>
      <br />
    </>
  );
};
export default Signup;
