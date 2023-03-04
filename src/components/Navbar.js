import React from "react";
import { Link, useParams } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const { id } = useParams();

  return (
 <>
    <nav className="navbar navbar-expand-sm fixed-top">
  <div className="container-fluid">
    <h5 className="navbar-bran" href="/"><b><i>Project Management App</i></b></h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto nav ">
        <li className="nav-item ms-0">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item ms-3">
          <a className="nav-link" href="/">About</a>
        </li>
       
         
      </ul>
      <form className="d-flex" role="search">
      <div className="logs me-2">
      <Link to="/login">
        <button className="btn btn-sm btn-outline-primary">Login</button>
      </Link>
    </div>
    <div className="logs me-2">
      <Link to="/register">
        <button className="btn btn-sm btn-outline-primary">Register</button>
      </Link>
    </div>
        
      </form>
    </div>
  </div>
</nav>

 </>
  );
}

export default Navbar;
