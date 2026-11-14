import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// The build prerenders the homepage into #root; take it over instead of repainting.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
