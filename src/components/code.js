import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Code = () => {
  const [code, setcode] = useState("");

  return (
    <>
      <div>
        <h1>OTP</h1>
        <input
          type="number"
          value={code}
          onChange={(e) => {
            setcode(e.target.value);
          }}
          placeholder="OTP"
        />
        <br />

        <div class="button">
          <button>Enter</button>
        </div>
      </div>
    </>
  );
};
export default Code;
