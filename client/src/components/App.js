import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import PetList from "./Main/PetList";
import PostPet from "./PostPet/PostPet";
import PetDetails from "./PetDetails";
import Edit from "./Edit";
import Login from "./Login/Login";
import SignUp from "./signup/SignUp";
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

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        // use Navigate function to redirect to login page
        navigate("/login");
      }
    });
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <h1>PetPal</h1>
          </Link>
          <div className="nav-links">
            {user ?
               <PrivateRoute
                  path="/petlist"
                  component={PetList}
                  user={user}
                  setUser={setUser}
                /> : null

            }
              <>
               
                {user ? (
                  <button variant="outline" onClick={handleLogoutClick}>
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    style={navStyle}
                    activeStyle={navHoverStyle}
                  >
                    Login
                  </Link>
                )}
             {
               <Link to="/signup" style={navStyle} activeStyle={navHoverStyle}>
                  SignUp
                </Link>
             }
               
              </>
            
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pets"
            element={<PostPet user={user} setUser={setUser} />}
          />
          <Route
            path="/petlist"
            element={<PetList user={user} setUser={setUser} />}
          />
          <Route
            path="/pets/details/:empid"
            element={<PetDetails user={user} setUser={setUser} />}
          />
          <Route
            path="/pets/edit/:empid"
            element={<Edit user={user} setUser={setUser} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
