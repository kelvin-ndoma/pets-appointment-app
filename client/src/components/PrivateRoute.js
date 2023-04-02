// PrivateRoute.js

import { Routes, Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, user, ...props }) {
  return (
    <>
     <Routes>
        <Route
            {...props}
            render={({ location }) =>
                user ? (
                <Component {...props} />
                ) : (
                <Navigate to={{ pathname: "/login", state: { from: location } }} />
                )
            }
            />
    </Routes>
    
    </>
   
  );
}

export default PrivateRoute;
