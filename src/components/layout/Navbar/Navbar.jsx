import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const dropdownRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false); // Starts hidden
  const [isMobileView, setIsMobileView] = useState(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1600) {
        setIsMobileView(true);
        setIsNavVisible(false); // Hide nav on mobile initially
      } else {
        setIsMobileView(false);
        setIsNavVisible(true); // Show nav on desktop by default
      }
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownIndex(null); // Close dropdown when clicking outside
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
        <Link to="/" onClick={() => setIsNavVisible(false)}>
          <img src={logo} alt="Brand Logo" />
          <h1>MOHANPURA - KUNDALIYA IRRIGATION PROJECTS</h1>
        </Link>
      </div>
      <div className="nav-mobile">
        <button
          id="navbar-toggle"
          onClick={handleToggleNav}
          className={isNavVisible ? "active" : ""}
        >
          <span></span>
        </button>
      </div>
      <nav className={isNavVisible || !isMobileView ? "" : "hidden"}>
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index} className={`nav-item`}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "!text-[var(--primary-accent)]" : ""
                }
                to={link.linkUrl}
                onClick={() => {
                  if (link.linkText !== "More") {
                    setIsNavVisible(false);
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
                        setOpenDropdownIndex(null);
                        setIsNavVisible(false);
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
