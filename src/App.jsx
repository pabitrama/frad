// import React from "react";

import {
  useEffect
} from "react";

import {
  useDispatch
} from "react-redux";

import {
  logout
} from "./redux/slices/authSlice";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { pageRouters } from './routes/Routers'

import './App.css';

import { useSelector } from "react-redux";

/*  AUTH PAGES */
import Login from "./pages/auth/Login";

/* LAYOUTS */
import MainLayout from "./layout/MainLayout";

/*  ROUTE JSON CONFIG  */
import roleRoutes from "./routes/roleRoutes.json";
import NotFound from "./pages/Error/NotFound";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

  const interval = setInterval(() => {

    const auth =
      JSON.parse(
        localStorage.getItem("auth")
      );

    if (auth) {

      const now =
        new Date().getTime();

      if (now > auth.expiry) {

        dispatch(logout());

      }

    }

  }, 1000);

  return () =>
    clearInterval(interval);

}, [dispatch]);

  /*  REDUX AUTH STATE  */
  const { isAuthenticated, role } = useSelector(
    (state) => state.auth
  );

  /*  GET DEFAULT ROUTE  */
  const defaultRoute =
    roleRoutes?.[role]?.defaultRoute || "/";

  return (
    <BrowserRouter>

      <Routes>

        {/*  LOGIN ROUTE  */}

        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Login />
            ) : (
              <Navigate
                to={defaultRoute}
                replace
              />
            )
          }
        />

        {/* ======================================
            AUTHENTICATED ROUTES
        ====================================== */}

        {isAuthenticated ? (

          <Route element={<MainLayout />}>

            {/* <Routers /> */}
            {/* {Routers()} */}
            {pageRouters.map((route, idx) => (
              <Route 
                key={idx} 
                path={route.path}
                element={route.component}
              />
            ))}
        
          </Route>

        ) : (

          /* ======================================
             REDIRECT IF NOT LOGGED IN
          ====================================== */

          <Route
              path="*"
              element={<NotFound />}
            />

        )}

      </Routes>

    </BrowserRouter>
  );
}

export default App;