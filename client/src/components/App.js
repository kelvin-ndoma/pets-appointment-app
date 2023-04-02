import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import PetList from "./Main/PetList";
import PostPet from "./PostPet/PostPet";
import PetDetails from "./PetDetails";
import Edit from "./Edit"
import Login from "./Login/Login"
import SignUp from "./signup/SignUp"
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
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav className="navbar">
            <Link to="/" className="navbar-brand">
              <h1>Developers Blog App</h1>
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
              <Link to="/details" style={navStyle} activeStyle={navHoverStyle}>
                About
              </Link>
              <Link
                to="/petlist"
                style={navStyle}
                activeStyle={navHoverStyle}
              >
                PetList
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/petlist" element={<PetList />} />
            <Route path="/pets" element={<PostPet />} />
            <Route path="/pets/details/:empid" element={<PetDetails />} />
            <Route path="/pets/edit/:empid" element={<Edit />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element = {<SignUp/>}/>
          </Routes>
        </main>
      </BrowserRouter>
  
    </div>
  );
}
export default App;