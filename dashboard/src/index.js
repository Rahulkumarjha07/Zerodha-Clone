import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";

// 🔥 TOAST IMPORTS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔥 GET TOKEN FROM URL
const params = new URLSearchParams(window.location.search);
const urlToken = params.get("token");

if (urlToken) {
localStorage.setItem("token", urlToken);

// ✅ Clean URL (remove ?token=...)
window.history.replaceState({}, document.title, "/");
}

// 🔐 AUTH CHECK
const isAuthenticated = () => {
return !!localStorage.getItem("token");
};

// 🔒 Protected Route
const ProtectedRoute = ({ children }) => {
if (!isAuthenticated()) {
// 🔥 Redirect to frontend login
window.location.href = "https://zerodha-clone-pi-lovat.vercel.app/login";
return null;
}
return children;
};

// 🔥 ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <BrowserRouter>
<> <Routes>
<Route
path="/*"
element={ <ProtectedRoute> <Home /> </ProtectedRoute>
}
/> </Routes>

```
  {/* 🔥 TOAST CONTAINER */}
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="dark"
  />
</>
```

  </BrowserRouter>
);
