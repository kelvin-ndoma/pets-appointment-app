// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import Home from "./Home";
// import Login from "./Login";
// import SignUp from "./SignUp";
// import NavBar from "./NavBar";
// import PetPage from "./PetPage";
// import "./App.css"





// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <NavBar user={user} setUser={setUser} />
//       <div className="main">
//         <Routes>
//           <Route path="/" element={user ? <Home user={user} /> : <Home />} />
//           <Route path="/signup" element={<SignUp setUser={setUser} />} />
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route path="/petpage" element={<PetPage setUser={setUser} />} />
          
//         </Routes>
        
//       </div>
      
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react'
import "./App.css"

// import Footer from './Footer/Footer'
import Home from './Home/Home'
import Main from './Main/Main'
import NavBar from './Navbar/NavBar'


const App = () => {
  return (

    <div>
     <NavBar/>
      <Home/>
      <br/>
      <Main/>
      {/* <Footer/> */}
    </div>
  )
}

export default App