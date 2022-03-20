import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CompanyPage from "./pages/CompanyPage";
import TaskBoard from "./pages/TaskBoard";
import Profile from "./pages/Profile";
//Components
import MainNavBar from "./components/MainNavBar";
function App() {
  const [user, setUser] = useState("");
  const [vendorId, setVendorId] = useState();

  useEffect(() => {
    const data = localStorage.getItem("user-data");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(user));
  });
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <MainNavBar user={user} setUser={setUser} />
          <div>
            <Routes>
              <Route path="/TaskBoard" element={<TaskBoard user={user}/>} />
              <Route path="/Profile" element={<Profile setUser={setUser} />} />
              <Route
                path="/Login"
                element={<Login setUser={setUser} user={user} />}
              />
              <Route
                path="/Main"
                element={<Main user={user} setVendorId={setVendorId} />}
              />
              <Route
                path={`/MoreInfo/${vendorId}`}
                element={<CompanyPage vendorId={vendorId} />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
