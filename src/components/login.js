import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otpsent, setotpsend] = useState(false);
  const [otp, setotp] = useState(null);
  const handleotpverify = async () => {
    try {
      const response = await axios.post("/mfa", {
        email: email,
        userpassword: password,
        code: otpsent,
      });
      if (response.data.success) {
        toast.success("Welcome to famebook");
        navigate("/profile");
      }
    } catch (error) {}
  };
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
          class="input"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />
        <input
          class="input"
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder="Password"
        />
        <br />
        <br />
        {otpsent ? (
          <>
            <div>
              <label>Enter OTP send on your number</label>
              <input
                class="input"
                type="number"
                // value={otp}
                // onChange={(e) => {
                //   setotp(e.target.value);
                // }}
              />
            </div>
          </>
        ) : (
          <></>
        )}

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
export default Login;
