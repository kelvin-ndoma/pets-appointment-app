import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPets from '../pets/AllPets';
import UserPets from "../UsersPet/Userpet";
import Login from "../Login/Login";
import SignUp from "../signup/SignUp";
import NavBar from "../Navbar/NavBar"

const Main = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <NavBar/>
      <BrowserRouter basename="/">
        <div className="main">
          <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/allpets" element={<AllPets />} />
            <Route path="/yourpet" element={<UserPets user={user} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
