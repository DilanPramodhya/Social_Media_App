import { Link } from "react-router";
import "./navbar.scss";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Haven</span>
        </Link>
        <CottageOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <NightsStayOutlinedIcon onClick={toggle} />
        )}
        <WidgetsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search ...." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MarkEmailReadOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1dsiDH5OKsrj-iNV3qwneo4BaGu2l5-CHw&s"
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
