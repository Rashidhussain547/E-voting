import "./App.css";
import Login from "./Pages/Login/Login";
import Candidate from "./Pages/ECscreen/Candidate";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";
function App() {
  const admin = useState(localStorage.getItem("admin"));
  const isAuthAdmin = localStorage.getItem("isAuthAdmin");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Login />} />
          <Route exact={true} path="/admin" element={<Login />} />
          {isAuthAdmin == true && (
            <Route exact={true} path="/candid" element={<Candidate />} />
          )}
          {admin && (
            <>
              <Route exact={true} path="/admin" element={<Login />} />
              {admin == true && isAuthAdmin == true && (
                <>
                  <Route />
                  <Route />
                </>
              )}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
