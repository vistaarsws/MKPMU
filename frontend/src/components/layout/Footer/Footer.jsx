import xIcon from "../../../assets/images/X.svg";
import facebookIcon from "../../../assets/images/Facebook.svg";
import instagramIcon from "../../../assets/images/Instagram.svg";
import youtubeIcon from "../../../assets/images/Youtube.svg";
import linkedinIcon from "../../../assets/images/linkedin-svgrepo-com.svg";
import footerLogo from "../../../assets/images/Emblem_of_Madhya_Pradesh1.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const footer_details = {
    reachOut: [
      {
        platform: "Instagram",
        icon: instagramIcon,
        url: "https://www.instagram.com/mohanpura.kundalia/",
      },
      {
        platform: "Facebook",
        icon: facebookIcon,
        url: "https://www.facebook.com/people/Mohanpura-Kundalia-Irrigation-Projects/100083424845078/",
      },
      { platform: "X", icon: xIcon, url: "https://x.com/pmumohanpurak " },
      {
        platform: "Youtube",
        icon: youtubeIcon,
        url: "https://www.youtube.com/@mohanpurakundaliamajorproj6855",
      },
      {
        platform: "Linkedin",
        icon: linkedinIcon,
        url: "https://www.linkedin.com/company/mohanpura-kundalia-project-management-unit/?viewAsMember=true",
      },
    ],
    quickLinks: [
      { companyInfo: "About Us", link: "/about" },
      { companyInfo: "Contact Us", link: "/contact" },
      { companyInfo: "Impact Story", link: "/impact-story" },
      { companyInfo: "Research & Publications", link: "/research-publication" },
      { companyInfo: "News & Updates", link: "/news-updates" },
    ],
    contactUs: {
      header:
        "Office of Project Director, Mohanpura Kundalia Project Management Unit, Rajgarh MP",
      telephone: "0772299285",
      email: "communications.mkpmu@gmail.com ",
    },
  };

  return (
    <>
      <footer>
        <section>
          <div>
            <img
              src={footerLogo}
              alt="Mohanpura & Kundaliya Irrigation Project Logo"
            />
          </div>
          <h1>MOHANPURA & KUNDALIA IRRIGATION PROJECT</h1>
        </section>
        <section>
          <strong className="">Quick Links</strong>
          <ul>
            {footer_details.quickLinks.map((e, index) => {
              return (
                <li key={index}>
                  <Link to={e.link}>{e.companyInfo}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="contactDetails_box">
          <strong className="">Contact us</strong>
          <ul>
            <li>{footer_details.contactUs.header}</li>
            <li>
              <span>Telephone: </span>
              {footer_details.contactUs.telephone}
            </li>
            <li>
              <span>Email: </span> {footer_details.contactUs.email}
            </li>
          </ul>
        </section>
        <section>
          <strong className="">Reach out to us</strong>
          <ul>
            {footer_details.reachOut.map((e, index) => {
              return (
                <li key={index}>
                  <Link to={e.url} target="_blank">
                    <img src={e.icon} alt={`${e.platform} Icon`} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <label>Sign up to our Newsletter</label>
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <button>Sign up</button>
            </div>
          </div>
        </section>

        <p>
          © MOHANPURA-KUNDALIA IRRIGATION PROJECT, 2024. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </>
  );
}
