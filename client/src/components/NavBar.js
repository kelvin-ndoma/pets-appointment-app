import React from "react";

import { useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }
  function handleClickLogin() {
    navigate("/login");
  }
  function handleClickSign() {
    navigate("/signup");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          PetPal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text me-2">Welcome, {user.username}!</span>
                <button 
                  className="btn btn-outline-primary me-2"
                  type="button"
                  onClick={handleLogoutClick} to="/"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary me-2"
                  type="button"
                  onClick={handleClickSign}
                >
                  SignUp
                </button>
                <button
                  className="btn btn-primary me-2"
                  type="button"
                  onClick={handleClickLogin}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
