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
import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href='/' className='logo flex'>
            <h1>PetPal</h1>
          </a>
        </div>

        <div className='navBar'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='/' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='allpets' className='navLink'> All Pets</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Your Pets</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Signin</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Login</a>
            </li>
            <button className='btn'><a href='#'>Logout</a></button>
          </ul>
         
        </div>
      </header>


    </section>
  )
}

export default NavBar
