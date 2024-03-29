import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";
export default function Navbar() {

  const navigate = useNavigate();

  let location = useLocation();

  const handleLogout = ()=>{

    localStorage.removeItem('token')

    navigate("/login");

    
  }


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">iNotebook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/' ? 'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/about' ? 'active':''}`} to="/about">About</Link>
        </li>
       
      </ul>

      {!localStorage.getItem('token')?      <form className="d-flex">
      <Link to="/login" class="btn btn-primary mx-2" tabIndex="-1" role="button" aria-disabled="true">Login</Link>
      <Link to="/signup" class="btn btn-primary mx-2" tabIndex="-1" role="button" aria-disabled="true">Sign Up</Link></form>
  :<button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
      
    </div>
  )
}


