import "./App.css";
import { useState, useEffect} from "react";
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
  const [vendors, setVendors] = useState({});
  // const [vendor, setVendor] = useState();
  const [vendorPage, setVendorPage] = useState();
 useEffect(() => {
   fetch("/vendors")
     .then((r) => r.json())
     .then((res) => {
       console.log(res);
       setVendors(res);
     });
 },[]);
 
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <MainNavBar user={user}/>
          <div>
            <Routes>
              <Route path="/Login" element={<Login  setUser={setUser}/>} />
              <Route
                path="/Main"
                element={<Main vendors={vendors} user={user}/>}
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
