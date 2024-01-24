import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Code from "./components/code";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/code" element={<Code />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
