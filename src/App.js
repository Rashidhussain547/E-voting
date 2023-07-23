import "./App.css";
import Login from "./Pages/Login/Login";
import Candidate from "./Pages/ECscreen/Candidate";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
