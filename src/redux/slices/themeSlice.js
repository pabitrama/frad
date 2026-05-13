import { createSlice } from "@reduxjs/toolkit";

/* =========================================
   INITIAL STATE
========================================= */

const initialState = {
  mode: "light",
  fontSize: 16
};

/* =========================================
   THEME SLICE
========================================= */

const themeSlice = createSlice({
  name: "theme",

  initialState,

  reducers: {

    /* =========================================
       TOGGLE LIGHT / DARK MODE
    ========================================= */

    toggleTheme: (state) => {

      state.mode =
        state.mode === "light"
          ? "dark"
          : "light";

      /* OPTIONAL :
         SAVE TO LOCAL STORAGE
      */

      localStorage.setItem(
        "themeMode",
        state.mode
      );
    },

    /* =========================================
       INCREASE FONT SIZE
    ========================================= */

    increaseFont: (state) => {

      if (state.fontSize < 24) {

        state.fontSize += 1;

        localStorage.setItem(
          "fontSize",
          state.fontSize
        );
      }
    },

    /* =========================================
       DECREASE FONT SIZE
    ========================================= */

    decreaseFont: (state) => {

      if (state.fontSize > 12) {

        state.fontSize -= 1;

        localStorage.setItem(
          "fontSize",
          state.fontSize
        );
      }
    },

    /* =========================================
       RESET FONT SIZE
    ========================================= */

    resetFont: (state) => {

      state.fontSize = 16;

      localStorage.setItem(
        "fontSize",
        16
      );
    }

  }
});

/* =========================================
   EXPORT ACTIONS
========================================= */

export const {
  toggleTheme,
  increaseFont,
  decreaseFont,
  resetFont
} = themeSlice.actions;

/* =========================================
   EXPORT REDUCER
========================================= */

export default themeSlice.reducer;