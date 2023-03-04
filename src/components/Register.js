import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ setLoggedIn }) => {
  const history = useNavigate();

  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:9292/register", userDetails, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 201) {
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrors(error.response.data.error);
        }
      });
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {errors.length > 0 &&
        errors.map((error, index) => (
          <div key={index} className="alert alert-danger">
            {error}
          </div>
        ))}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import Sidebar from "./Sidebar";

// const Register = ({ setLoggedIn }) => {
  
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirm_password] = useState('');
//   const [error, setError] = useState(null);


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirm_password) {
//       setError('Passwos do not match');
//       return;
//     }
//     fetch("http://localhost:9292/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         password: password,
//         confirm_password: confirm_password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   return (
//     <div>
//       <div className="container pt-0  ">
//         <div className="container-fluid col-md-5 text-white border">
//           <form onSubmit={handleSubmit}>
//             <h2 align="center">
//               <u>Registration Form</u>
//             </h2>
//             {error && <p>{error}</p>}

//             <div className="form-outline mb-3 row mt-4">
//               <div className="col">
//                 <label className="form-label" for="fname">
//                   First Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="fname"
//                   value={firstname}
//             onChange={(event) =>
//               setFirstname(event.target.value)
//             }
//                   placeholder="First name"
//                   aria-label="First name"
//                 />
//               </div>
//               <div className="col">
//                 <label className="form-label" for="lname">
//                   Last Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   id="lname"
//                   value={lastname}
//                   onChange={(event) =>
//                     setLastname(event.target.value)
//                   }
//                   placeholder="Last name"
//                   aria-label="Last name"
//                 />
//               </div>
//             </div>

//             <div className="form-outline mb-3">
//               <label className="form-label" for="remail">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="remail"
//                 value={email}
//                 onChange={(event) =>
//                   setEmail(event.target.value)
//                 }
//                 className="form-control form-control-sm"
//                 placeholder="Enter a valid email address"
//                 required
//               />
//             </div>

//             <div className="form-outline row mb-3">
//               <div className="col">
//                 <label className="form-label" for="rpassword">
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   id="rpassword"
//                   value={password}
//                   onChange={(event) =>
//                     setPassword(event.target.value)
//                   }
//                   className="form-control form-control-sm"
//                   placeholder="Enter password"
//                   required
//                 />
//               </div>
//               <div className="col">
//                 <label className="form-label" for="rcpassword">
//                   Confirm Password:
//                 </label>
//                 <input
//                   type="password"
//                   id="rcpassword"
//                   value={confirm_password}
//                   onChange={(event) =>
//                     setConfirm_password(event.target.value)
//                   }
//                   className="form-control form-control-sm"
//                   placeholder="Confirm password"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="d-flex justify-content-between align-items-center row">
//               <button
//                 type="submit"
//                 className="btn btn-sm btn-primary btn-sm col-md-6 offset-md-3"
//                 id="registerbtn"
//                 style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
//                 Register
//               </button>
//             </div>

//             <div className="text-center text-sm-start mt-4 pb-3 ms-0">
//               <p className="small fw-bold mt-2 pt-1 mb-0 ms-0" id="regist" align="center">
//                       Already have an account?
//                 <a href="/login" className="link-primary">
//                   Login
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Sidebar />
//     </div>
//   );
// };

// export default Register;
