import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/Notes/Notestate"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Notestate>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      </Notestate>

    </>
  );
}

export default App;
