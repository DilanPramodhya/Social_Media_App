import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import { Outlet } from "react-router-dom"; // Ensure correct import
import RightBar from "./components/rightBar/RightBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap routes in the Layout */}
        <Route path="/" element={<Layout />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
