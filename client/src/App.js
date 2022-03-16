import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import CompanyPage from "./pages/CompanyPage";
//Components
import MainNavBar from "./components/MainNavBar";
function App() {
  const [user, setUser] = useState();
  const [vendor, setVendor] = useState();
  const [vendorPage, setVendorPage] = useState();

  console.log(vendorPage);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <MainNavBar />
          <div>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route
                path="/Main"
                element={<Main setVendorPage={setVendorPage} vendorPage={vendorPage}/>}
              />
              <Route path={`/MoreInfo/${vendorPage}`} element={<CompanyPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
