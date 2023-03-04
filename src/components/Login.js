import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
      navigate(`/users/${user.id}`);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    
      <div className="container pt-0  ">
         <div className="container-fluid col-md-4 text-white border">
           <form onSubmit={handleSubmit} name="loginform">
             <h2 align="center">
               <u>Login Form</u>
             </h2>


             <div className="form-outline mb-4">
               <label className="form-label" htmlFor="email">
                 Email:
               </label>
               <input
                 type="email"
                 id="email"
                 className="form-control form-control-sm"
                 value={email}
                 onChange={(event) => setEmail(event.target.value)}
                 placeholder="Enter a valid email address"
               />
             </div>

             <div className="form-outline mb-3">
               <label className="form-label" htmlFor="password">
                 Password:
               </label>
               <input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
                 className="form-control form-control-sm"
                 placeholder="Enter password"
               />
             </div>
             <div className="d-flex justify-content-between align-items-center">
               <a href="/" className="link-primary">
                 Forgot password?
               </a>
               <button
                 type="submit"
                 className="btn btn-sm btn-primary btn-sm"
                 id="loginbtn"
                 style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
               >
                 Login
               </button>
             </div>

             <div className="text-center text-sm-start ms-4 pt-3 mt-2 pb-3">
               <p className="small fw-bold ms-5 pt-1 mb-0 regist" id="regist">
                 Don't have an account?{" "}
                 <a href="/register" className="link-primary">
                   Register
                 </a>
               </p>
             </div>
             </form>
             </div>
             </div>
  );
}

export default LoginForm;



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/login');
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const response = await fetch('http://localhost:9292/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const user = await response.json();
//       setUser(user);
//       navigate(`/users/${user.id}`);
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <>
//       {user ? (
//         <Navbar user={user} onLogout={handleLogout} />
//       ) : (
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Log in</button>
//       </form>
//     </>
//   );
// }

// export default LoginForm;
