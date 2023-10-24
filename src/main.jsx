import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import App from "./AppV1.jsx";

// import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {/* <StarRating /> */}
      <App />
    </>
  </React.StrictMode>
);
