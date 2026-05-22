import {
  createSlice
} from "@reduxjs/toolkit";

/* =========================================
   STORAGE
========================================= */

const storedAuth =
  JSON.parse(
    localStorage.getItem("auth")
  );

const isExpired = () => {

  if (!storedAuth) return true;

  return (
    new Date().getTime() >
    storedAuth.expiry
  );

};

/* =========================================
   INITIAL STATE
========================================= */

const initialState = {

  isAuthenticated:
    storedAuth && !isExpired(),

  user:
    storedAuth?.user || null,

  role:
    storedAuth?.role || null

};

/* =========================================
   SLICE
========================================= */

const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {

    /* LOGIN */

    login: (state, action) => {

      const expiryTime =

        new Date().getTime()
        +
        300 * 60 * 1000;

      state.isAuthenticated =
        true;

      state.user =
        action.payload.user;

      state.role =
        action.payload.role;

      /* SAVE STORAGE */

      localStorage.setItem(

        "auth",

        JSON.stringify({

          user:
            action.payload.user,

          role:
            action.payload.role,

          expiry:
            expiryTime

        })

      );

    },

    /* LOGOUT */

    logout: (state) => {

      state.isAuthenticated =
        false;

      state.user = null;

      state.role = null;

      localStorage.removeItem(
        "auth"
      );

    }

  }

});

export const {

  login,
  logout

} = authSlice.actions;

export default authSlice.reducer;