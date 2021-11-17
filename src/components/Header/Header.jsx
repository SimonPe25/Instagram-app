import "./style.scss";
import logo from "./logo.png";
import Icon from "../Icon/Icon";
import LogoUser from "../../usersImages/katerinakhaidukova/01_katerinakhaidukova.jpg";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-block">
        <div>
          <Link to="/">
            <img src={logo} alt={"logo"} className="logo" />
          </Link>
        </div>
        <div className="blockWithUser">
        <div className="container-icons">
          <Link to="/"><Icon type="home" color="#333333" className="icon-home icon-header"/></Link>
          <Link to="/direct"><Icon type="arrow" color="#333333" className="icon-arrow icon-header"/></Link>
          <Link to="/garely"><Icon type="compass" color="#333333" className="icon-compass icon-header"/></Link>
        </div>
          <div className="user">
              <Link to="/katerinakhaidukova"><img src={LogoUser} className="user-logo" alt="user-logo" /></Link>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
