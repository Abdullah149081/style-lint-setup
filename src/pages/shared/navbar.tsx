import logo2 from "../../assets/Freeio..svg";
import downArrow from "../../assets/down-filled-triangular-arrow 3.svg";
import "./navbar.css";
import logo1 from "/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-container">
          {/* logos */}
          <div className="logos">
            <a href="/">
              <img src={logo1} alt="" />
            </a>
            <a href="/">
              <img src={logo2} alt="Freeio" />
            </a>
          </div>

          {/* menu  */}
          <div className="menu ">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/" className="">
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
                      <a href="/">Designing Sector</a>
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
        <div className="btn-wrap">
          <button className="btn-primary">Hire Employee</button>
          <button className="btn-outline">Login/ Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
