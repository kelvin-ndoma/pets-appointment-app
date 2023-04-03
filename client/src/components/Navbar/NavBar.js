// import React from 'react'

// function NavBar() {
//     {
//         const navStyle = {
//           display: "inline-block",
//           margin: "0 20px",
//         };
//         const navHoverStyle = {
//           color: "white",
//           backgroundColor: "black",
//           padding: "5px 10px",
//           borderRadius: "5px",
//           transition: "all 0.3s ease",
//         };
      
//     function handleLogoutClick() {
//         fetch("/logout", { method: "DELETE" }).then((r) => {
//           if (r.ok) {
//             setUser(null);
//             // use Navigate function to redirect to login page
//             navigate("/login");
//           }
//         });
//       }
//   return (
//     <navbar>
//          <header>
//         <nav className="navbar">
//           <Link to="/" className="navbar-brand">
//             <h1>PetPal</h1>
//           </Link>
//           <div className="nav-links">
//             {user ?
//                <PrivateRoute
//                   path="/petlist"
//                   component={PetList}
//                   user={user}
//                   setUser={setUser}
//                 /> : null
//             }
//                 {user ? 
//                   <button variant="outline" onClick={handleLogoutClick}>
//                     Logout
//                   </button>
//                  : 
//                   <Link
//                     to="/login"
//                     style={navStyle}
//                     activeStyle={navHoverStyle}
//                   >
//                     Login
//                   </Link>
//                 }
//              {user ? null :
//                <Link to="/signup" style={navStyle} activeStyle={navHoverStyle}>
//                   SignUp
//                 </Link>

//              }            
//           </div>
//         </nav>
//       </header>

//     </navbar>
//   )
// }

// export default NavBar