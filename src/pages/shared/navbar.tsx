import { useCallback, useState } from "react";
import logo2 from "../../assets/Freeio..svg";
import downArrow from "../../assets/down-filled-triangular-arrow 3.svg";
import mobileLogo from "../../assets/header-logo.svg";
import menuIcon from "../../assets/icons8-menu.svg";
import "./navbar.css";
import logo1 from "/logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="nav">
      {/* responsive logos */}
      <div className="res-logos">
        <div className="logos">
          <img src={mobileLogo} alt="" />
        </div>

        <div onClick={toggleOpen} className="toggle-open">
          <img className="menu-icon" src={menuIcon} alt="" />
        </div>
      </div>
      <nav className={`${isOpen ? "res-nav" : "navbar"}`}>
        <div className="navbar-container">
          <div className="menu-container">
            {/* logos */}
            <div className="toggle-bar">
              <div className="logos">
                <a href="/">
                  <img src={logo1} alt="" />
                </a>
                <a href="/">
                  <img src={logo2} alt="Freeio" />
                </a>
              </div>
              <div onClick={toggleOpen} className="toggle-close">
                x
              </div>
            </div>

            {/* menu  */}
            <div className="menu ">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/" className="down-arrow">
                    Projects
                    <img src={downArrow} alt="downArrow" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    Freelancers <img src={downArrow} alt="downArrow" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="/">Household Sector</a>
                    </li>
                    <li>
                      <a href="/">
                        Designing Sector <img src={downArrow} alt="downArrow" />
                      </a>
                      <ul className="sub-dropdown">
                        <li>
                          <a href="/">Interior Designing</a>
                        </li>
                        <li>
                          <a href="/">Exterior Designing</a>
                        </li>
                        <li>
                          <a href="/">Fashion Designing</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/"> Sector</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    Jobs <img src={downArrow} alt="downArrow" />
                  </a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* button */}
          <div className="btn-wrap">
            <button className="btn-primary">Hire Employee</button>
            <button className="btn-outline">Login/ Signup</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
