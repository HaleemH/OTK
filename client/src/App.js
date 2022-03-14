import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
//Components
import MainNavBar from "./components/MainNavBar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <>
            <MainNavBar />
          </>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
