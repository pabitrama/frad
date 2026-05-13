import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import './index.css'
import './assets/css/variables.css'
import './assets/css/style.css'
import App from './App.jsx'

import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Provider store={store}>
    <App />
  </Provider>

);