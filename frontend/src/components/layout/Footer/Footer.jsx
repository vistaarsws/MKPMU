import xIcon from "../../../assets/images/X.svg";
import facebookIcon from "../../../assets/images/Facebook.svg";
import instagramIcon from "../../../assets/images/Instagram.svg";
import youtubeIcon from "../../../assets/images/Youtube.svg";
import footerLogo from "../../../assets/images/Emblem_of_Madhya_Pradesh1.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const footer_details = {
    reachOut: [
      { platform: "Instagram", icon: instagramIcon, url: "/" },
      { platform: "Facebook", icon: facebookIcon, url: "/" },
      { platform: "X", icon: xIcon, url: "/" },
      { platform: "Youtube", icon: youtubeIcon },
    ],
    quickLinks: [
      { companyInfo: "About Us", link: "/about" },
      { companyInfo: "Contact Us", link: "/contact" },
      { companyInfo: "Impact Story", link: "/impact-story" },
      { companyInfo: "Research & Publications", link: "/research-publication" },
      { companyInfo: "News & Updates", link: "/news-updates" },
    ],
    contactUs: {
      header: "Government of Madhya Pradesh, Water Resource Department",
      telephone: 9111111111,
      email: "contact@mppmu.gov.in",
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
          <h1>MOHANPURA & KUNDALIYA IRRIGATION PROJECT</h1>
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
        <section>
          <strong className="">Contact us</strong>
          <ul>
            <li>{footer_details.contactUs.header}</li>
            <li>Telephone: {footer_details.contactUs.telephone}</li>
            <li>Email: {footer_details.contactUs.email}</li>
          </ul>
        </section>
        <section>
          <strong className="">Reach out to us</strong>
          <ul>
            {footer_details.reachOut.map((e, index) => {
              return (
                <li key={index}>
                  <a>
                    <img src={e.icon} alt={`${e.platform} Icon`} />
                  </a>
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
