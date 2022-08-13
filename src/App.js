import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import UserLogin from "./pages/Login";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Expense from "./pages/Expense";
import Packages from "./pages/Packages";
import Message from "./pages/Message";
import PrivateRoute from "./component/auth/privateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="property" element={<Property />} />
          <Route path="expense" element={<Expense />} />
          <Route path="package" element={<Packages />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
