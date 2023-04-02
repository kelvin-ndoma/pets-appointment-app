// import "./App.css";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Home from "./Home/Home";
// import PetList from "./Main/PetList";
// import PostPet from "./PostPet/PostPet";
// import PetDetails from "./PetDetails";
// import Edit from "./Edit"
// import Login from "./Login/Login"
// import SignUp from "./signup/SignUp"
// import { useEffect, useState } from "react";
// function App() {
//   const navStyle = {
//     display: "inline-block",
//     margin: "0 20px",
//   };
//   const navHoverStyle = {
//     color: "white",
//     backgroundColor: "black",
//     padding: "5px 10px",
//     borderRadius: "5px",
//     transition: "all 0.3s ease",
//   };
// const [user, setUser]= useState(null);

// useEffect(()=>{
//   fetch("/me").then((r)=>{
//     if (r.ok){
//       r.json().then((user) => setUser(user) )
//     }
//   });
// }, []);




//   return (
//     <div className="App">
//       <BrowserRouter>
//         <header>
//           <nav className="navbar">
//             <Link to="/" className="navbar-brand">
//               <h1>PetPal</h1>
//             </Link>
//             <div className="nav-links">
//               <Link to="/" style={navStyle} activeStyle={navHoverStyle}>
//                 Home
//               </Link>
//               <Link to="/login" style={navStyle} activeStyle={navHoverStyle}>
//                 Login
//               </Link>
//               <Link to="/signup" style={navStyle} activeStyle={navHoverStyle}>
//                 SignUp
//               </Link>
//               <Link to="/details" style={navStyle} activeStyle={navHoverStyle}>
//                 About
//               </Link>
//               <Link
//                 to="/petlist"
//                 style={navStyle}
//                 activeStyle={navHoverStyle}
//               >
//                 PetList
//               </Link>
//             </div>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
          
//             <Route path="/petlist" element={<PetList user={user} setUser={setUser}/>} />
//             <Route path="/pets" element={<PostPet user={user} setUser={setUser} />} />
//             <Route path="/pets/details/:empid" element={<PetDetails user={user} setUser={setUser} />} />
//             <Route path="/pets/edit/:empid" element={<Edit user={user} setUser={setUser}/>} />
//             <Route path="/login" element={<Login/>} />
//             <Route path="/signup" element = {<SignUp/>}/>
//           </Routes>
//         </main>
//       </BrowserRouter>
  
//     </div>
//   );
// }
// export default App;


// App.js

import "./App.css";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home";
import PetList from "./Main/PetList";
import PostPet from "./PostPet/PostPet";
import PetDetails from "./PetDetails";
import Edit from "./Edit"
import Login from "./Login/Login"
import SignUp from "./signup/SignUp"
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";

function App() {
  const navStyle = {
    display: "inline-block",
    margin: "0 20px",
  };
  const navHoverStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "all 0.3s ease",
  };
  
  const [user, setUser]= useState(null);
 

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if (r.ok){
        r.json().then((user) => setUser(user) )
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);

      }
    });
  }

  return (
    <div className="App">

      <BrowserRouter>
        <header>
          <nav className="navbar">
            <Link to="/" className="navbar-brand">
              <h1>PetPal</h1>
            </Link>
            <div className="nav-links">
              <Link to="/" style={navStyle} activeStyle={navHoverStyle}>
                Home
              </Link>
              <Link to="/login" style={navStyle} activeStyle={navHoverStyle}>
                Login
              </Link>
              <Link to="/signup" style={navStyle} activeStyle={navHoverStyle}>
                SignUp
              </Link>
             
              <PrivateRoute
                path="/petlist"
                component={PetList}
                user={user}
                setUser={setUser}
              />
              <button variant="outline" onClick={handleLogoutClick}>
              Logout
              </button>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PostPet user={user} setUser={setUser} />} />
            <Route path="/petlist" element={<PetList user = {user} setUser={setUser}/>}/>
            <Route path="/pets/details/:empid" element={<PetDetails user={user} setUser={setUser} />} />
            <Route path="/pets/edit/:empid" element={<Edit user={user} setUser={setUser}/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
