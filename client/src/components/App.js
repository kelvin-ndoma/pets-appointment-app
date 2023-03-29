import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";




function App() {
  const [user, setUser] = useState(null); 

  useEffect(() => {

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
    <NavBar/>
    <NavBar user={user} setUser={setUser} />

    <div className= "main">
      {user?(
        <>
        <Routes>
              <Route strict path="/">
                <Home exact user={user}/>
              </Route>                          
            </Routes>
        </>
      ):(
        <Routes>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route strict path="/">
                <Home />
            </Route>
          </Routes>
      )}
    </div>
   
    </>
  
  );
  
}

export default App;