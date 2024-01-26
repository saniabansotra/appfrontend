// import React from "react";
// const Profile = () => {
//   return (
//     <>
//       <div class="profilemain">
//         <h1 style={{ color: "white" }}> Hello gyzz this is my profile</h1>
//         <h3>Name: Sania Bansotra</h3>
//         <h3>Email: saniabansotra@gmail.com</h3>
//         <h3>Phone Number: 889956478</h3>
//       </div>
//     </>
//   );
// }
import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otpsent, setotpsend] = useState(false);
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
      <div class="login">
        <h1>Login</h1>
        <input
          style={{
            border: "none",
            color: "white",
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            boxShadow: "1px 1px 10px #fa7d868c",
          }}
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
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
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <br />

        <div class="button">
          <button
            type="button"
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
              if (otpsent) {
                navigate("/profile");
              } else {
                setotpsend(true);
              }
            }}
          >
            Login
          </button>
        </div>
        {/* {setotpsend(true) ? (
          <div>
            <label>Enter OTP send on your number</label>
            <input
              type="number"
              value={otpsent}
              onChange={(e) => {
                setotpsend(e.target.value);
              }}
            />
          </div>
        ) : (
          setotpsend(false)
        )} */}
        <h3>
          NewUser??---
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span style={{ color: "#fa7d868c " }}>SIGNUP</span>
          </Link>
        </h3>
      </div>
      <br />
    </>
  );
};

export default Profile;
