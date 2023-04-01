import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AllPets from '../pets/AllPets'


const Main = () => {
  

  return (
    <div>

      
      
      <BrowserRouter>

/     <div className="main">
       <Routes>
          
          {/* <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} /> */}
         <Route path="/allpets" element={<AllPets />} /> 

       </Routes>
     
     </div>
      
     </BrowserRouter>
    </div>
  )
}

export default Main