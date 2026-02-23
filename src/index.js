import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// SHOW APP + REMOVE LOADER AFTER EVERYTHING LOADS
window.addEventListener("load", () => {
  const loader = document.getElementById("global-loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";

    setTimeout(() => {
      loader.style.display = "none";
      rootElement.style.display = "block"; // 👈 show app here
    }, 400);
  } else {
    rootElement.style.display = "block";
  }
});