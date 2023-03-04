// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
// import axios from "axios";
// import './components/css/bootstrap.css'

// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Projects from "./components/Projects";
// import ProjectForm from "./components/ProjectForm";
// import Navbar from "./components/Navbar";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);


//   useEffect(() => {
//     axios
//       .get("http://localhost:9292/login", { withCredentials: true })
//       .then((res) => {
//         setLoggedIn(true);
//       })
//       .catch((err) => {
//         setLoggedIn(false);
//       });
//   }, []);

  

//   return (
   
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={loggedIn ? <Navigate to="/projects" /> : <Navbar />} />
//       <Route path="/register" element={loggedIn ? <Navigate to="/projects" /> : <Register />} />
//       <Route path="/login" element={loggedIn ? <Navigate to="/projects" /> : <Login />} />
//       <Route path="/projects" element={!loggedIn ? <Navigate to="/" /> : <Projects />} />
//       <Route path="/" element={loggedIn ? <Navigate to="/projects" /> :<Navbar />} />
//       {/* <Route path="/register" element={ <Register />} />
//       <Route path="/login" element={ <Login />} />
//       <Route path="/projects" element={ <Projects />} />
//       <Route path="/projectform" element={ <ProjectForm />} /> */}
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import './components/css/bootstrap.css'

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Projects from "./components/Projects";
import ProjectForm from "./components/ProjectForm";
import Navbar from "./components/Navbar";
import UserPage from "./components/Home";
import LoginForm from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:9292/login", { withCredentials: true })
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
      });
  }, []);

 
  
  

  return (

    <Router>
      <div className="">
      <Navbar user={user} />
    
      <div className="">
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path="/users/:id" element={<UserPage user={user} />} />
      </Routes>
      </div>
      </div>
    </Router>
      
      
  );
}

export default App;

