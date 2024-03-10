import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/Notes/Notestate"
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  const [alert,setAlert] = useState(null) 

  const showAlert = (message,type)=>{

    setAlert({message,type})

    setTimeout(()=>{

      setAlert(null)

    },1500)
  }

  return (
    <>
    <Notestate>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/"  element={<Home alert={alert} showAlert={showAlert}/>}></Route>
            <Route path="/about"  element={<About alert={alert} showAlert={showAlert}/>}></Route>
            <Route path="/signup"  element={<Signup alert={alert} showAlert={showAlert}/>}></Route>
            <Route path="/login"  element={<Login alert={alert} showAlert={showAlert}/>}></Route>
        </Routes>
      </Router>
      </Notestate>

    </>
  );
}

export default App;
