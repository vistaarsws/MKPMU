import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const location = useLocation();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = [
    {
      linkText: "About",
      linkUrl: "/about",
    },
    {
      linkText: "Impact Story",
      linkUrl: "/impact-story",
    },
    {
      linkText: "Contact Us",
      linkUrl: "/contact",
    },
    {
      linkText: "More",
      linkUrl: "#",
      sideIcon: true,
      dropdown: [
        { text: "Keep source formatting", link: "#" },
        { text: "Keep formatting", link: "#" },
        { text: "Source", link: "#" },
      ],
    },
  ];

  return (
    <header className="navigation">
      <div className="brand">
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <img src={logo} alt="Brand Logo" />
          <h1
            className={`${location.pathname === "/" ? "" : "text-[#000000]"}`}
          >
            MOHANPURA - KUNDALIYA IRRIGATION PROJECTS
          </h1>
        </Link>
      </div>
      <div className="nav-mobile">
        <button
          id="navbar-toggle"
          onClick={handleToggleNav}
          className={isNavOpen ? "active" : ""}
        >
          <span></span>
        </button>
      </div>
      <nav>
        <ul className={`nav-list ${isNavOpen ? "open" : "hidden"}`}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`nav-item ${
                location.pathname === "/" ? "" : "text-[#000000]"
              }`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[var(--primary-accent)]" : ""
                }
                to={link.linkUrl}
                onClick={() => {
                  setIsNavOpen(false);
                  if (link.dropdown) {
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    );
                  }
                }}
              >
                {link.linkText}
                {link.sideIcon && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke={location.pathname === "/" ? "black" : "#000000"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </NavLink>
              {link.dropdown && openDropdownIndex === index && (
                <div className="dropdown-content">
                  {link.dropdown.map((dLink, dIndex) => (
                    <Link key={dIndex} to={dLink.link}>
                      {dLink.text}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
