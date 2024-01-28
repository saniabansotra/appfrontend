import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  // const [age, setage] = useState("");
  const handleregister = async () => {
    try {
      if (
        name.trim() === "" ||
        password.trim() === "" ||
        email.trim() === "" ||
        phonenumber.trim() === true
      ) {
        return toast.warning("please enter the full details");
      }
      const response = await axios.post("./signup", {
        email: email,
        username: name,
        userpassword: password,
        phonenumber: phonenumber,
      });
      if (response.data.success) {
        toast.success("successfully registered");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
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
      <div class="signup">
        <h1 style={{ color: "rgb(184, 183, 183)" }}>SIGNUP</h1>
        {/* <label for="name">Name:</label> */}
        <input
          class="input"
          type="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Name"
        />
        <br />

        <input
          class="input"
          value={email}
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          placeholder="Email"
        />
        <br />

        <input
          class="input"
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
          class="input"
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
              handleregister();
            }}
          >
            Register
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
