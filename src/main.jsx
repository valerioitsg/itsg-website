import React from "react";
import ReactDOM from "react-dom/client";
import ITSGWebsite from "./ITSGWebsite.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(React.StrictMode, null,
    React.createElement(ITSGWebsite, null)
  )
);
