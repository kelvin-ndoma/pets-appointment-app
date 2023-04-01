// import React from "react";
// import { useNavigate } from "react-router-dom";

// function NavBar({ user, setUser }) {
//   const navigate = useNavigate();

//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//         navigate("/");
//       }
//     });
//   }
//   function handleClickLogin() {
//     navigate("/login");
//   }
//   function handleClickSign() {
//     navigate("/signup");
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           PetPal
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link" href="/allPets">
//                 PetList
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/mypet">
//                 MyPet
//               </a>
//             </li>
//           </ul>
//           <div className="d-flex">
//             {user ? (
//               <div className="dropdown">
//                 <button
//                   className="btn btn-secondary dropdown-toggle me-2"
//                   type="button"
//                   id="dropdownMenuButton"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Welcome, {user.username}!
//                 </button>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuButton"
//                 >
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       type="button"
//                       onClick={handleLogoutClick}
//                       to="/"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <div className="dropdown">
//                 <button
//                   className="btn btn-primary dropdown-toggle me-2"
//                   type="button"
//                   id="dropdownMenuButton"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Your Account
//                 </button>
//                 <ul
//                   className="dropdown-menu dropdown-menu-end"
//                   aria-labelledby="dropdownMenuButton"
//                 >
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       type="button"
//                       onClick={handleClickSign}
//                     >
//                       Sign Up
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       type="button"
//                       onClick={handleClickLogin}
//                     >
//                       Login
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const NavBar = ({ handleLogout }) => {

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <Link to='/' className='logo flex'>
            <h1>PetPal</h1>
          </Link>
        </div>
        <div className='navBar'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <Link to='/' className='navLink'>
                Home
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/allpets' className='navLink'>
                All Pets
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/yourpet' className='navLink'>
                Your Pets
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/signup' className='navLink'>
                Signin
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/login' className='navLink'>
                Login
              </Link>
            </li>
            <li className='navItem'>
              <button className='btn' type='button' onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default NavBar;




