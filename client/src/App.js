import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CompanyPage from "./pages/CompanyPage";
import TaskBoard from "./pages/TaskBoard";
//Components
import MainNavBar from "./components/MainNavBar";
function App() {
  const [user, setUser] = useState();
  // const [vendor, setVendor] = useState();
  const [vendorPage, setVendorPage] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <MainNavBar user={user} />
          <div>
            <Routes>
              <Route path="/TaskBoard" element={<TaskBoard />} />
              <Route path="/Login" element={<Login setUser={setUser} />} />
              <Route
                path="/Main"
                element={<Main user={user} setVendorPage={setVendorPage} />}
              />
              <Route
                path={`/MoreInfo/${vendorPage}`}
                element={<CompanyPage vendorPage={vendorPage} />}
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
