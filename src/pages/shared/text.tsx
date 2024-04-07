import logo2 from "../../assets/Freeio..svg";
import downArrow from "../../assets/down-filled-triangular-arrow 3.svg";
import "./navbar.css";
import logo1 from "/logo.svg";
const Navba = () => {
  const menuItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Freelancers",
      link: "/",
      subMenu: [
        {
          name: "Household Sector",
          link: "/",
        },
        {
          name: "Designing Sector",
          link: "/",
          subMenu: [
            {
              name: "Interior Designing",
              link: "/",
            },
            {
              name: "Exterior Designing",
              link: "/",

              subMenu: [
                {
                  name: "Gardening Designing",
                  link: "/",
                },
                {
                  name: "Swimming Pool Designing",
                  link: "/",
                },
              ],
            },
            {
              name: "Fashion Designing",
              link: "/",
            },
          ],
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: "Marketing Sector",
          link: "/",
        },
        {
          name: " Sector",
          link: "/",
        },
      ],
    },
    {
      name: "Jobs",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Contact us",
      link: "/",
    },
  ];

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
              {menuItem.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    {item.name}
                    {item.subMenu && <img src={downArrow} alt="down-arrow" />}
                  </a>
                  {item.subMenu && (
                    <ul className="dropdown ">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link}>{subItem.name}</a>
                          {subItem.subMenu && (
                            <ul className="sub-dropdown ">
                              {subItem.subMenu.map(
                                (subSubItem, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <a href={subSubItem.link}>
                                      {subSubItem.name}
                                    </a>
                                  </li>
                                ),
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
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

export default Navba;
