import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const dropdownRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      linkText: "Project Outreach",
      linkUrl: "/project-outreach",
    },
    {
      linkText: "Awards & Acknowledgement",
      linkUrl: "/awards-acknowledgement",
    },

    {
      linkText: "More",
      linkUrl: "#",
      sideIcon: true,
      dropdown: [
        { text: "News & Updates", link: "/news-updates" },
        { text: "Research & Publication", link: "/research-publication" },
        { text: "Testimonials", link: "/testimonials" },
        { text: "Contact Us", link: "/contact" },
      ],
    },
  ];

  return (
    <header className="navigation">
      <div className="brand">
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <img src={logo} alt="Brand Logo" />
          <h1>MOHANPURA - KUNDALIYA IRRIGATION PROJECTS</h1>
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
            <li key={index} className={`nav-item `}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "!text-[var(--primary-accent)]" : ""
                }
                to={link.linkUrl}
                onClick={() => {
                  if (link.linkText !== "More") {
                    setIsNavOpen(false);
                  }

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
                    stroke="black"
                    id="dropDownArrow"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </NavLink>
              {link.dropdown && openDropdownIndex === index && (
                <div className="dropdown-content" ref={dropdownRef}>
                  {link.dropdown.map((dLink, dIndex) => (
                    <NavLink
                      key={dIndex}
                      to={dLink.link}
                      className={({ isActive }) =>
                        isActive ? "!text-[var(--primary-accent)]" : ""
                      }
                      onClick={() => {
                        setOpenDropdownIndex(false);
                        setIsNavOpen(false);
                      }}
                    >
                      {dLink.text}
                    </NavLink>
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
