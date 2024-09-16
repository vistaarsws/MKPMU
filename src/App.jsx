import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import notificationIcon from "./assets/images/notificationIcon.svg";
import crossIcon from "./assets/images/crossIcon.svg";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Impact from "./pages/Impact/Impact";
import Project from "./pages/Project/Project";
import MemberProfile from "./pages/MemberProfile/MemberProfile";
import Testimonials from "./pages/Testimonials/Testimonials";
import GridConentTemplate from "./components/ui/Templates/GridContentTemplate/GridContentTemplate";
import Research from "./pages/Research/Research";
import Awards from "./pages/Awards/Awards";
import Contact from "./pages/Contact/Contact";

import { projectOutreach_page, newsUpdate_page } from "./utils/Constant";
import ScrollToTop from "./hooks/ScrollToTop";
import { useState } from "react";

function App() {
  const [notificationBar, setNotificationBar] = useState(true);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className={`notificationBar ${notificationBar ? "" : "hidden"}`}>
          <div>
            <p>
              <img src={notificationIcon} alt="Notification Icon" />
              Beware of emails asking to transfer funds to ILC, this is against
              our policy. If you have received any suspicious emails, please
              alert us at info@mk-pkc.gov.in
            </p>
            <span>Learn More</span>
          </div>

          <img
            src={crossIcon}
            alt="Cross Icon"
            onClick={() => setNotificationBar(!notificationBar)}
          />
        </div>
        <header className="sticky top-0 z-[99] bg-white">
          <Navbar />
        </header>
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact-story" element={<Impact />} />
            <Route path="/team/:name" element={<MemberProfile />} />
            <Route path="/testimonials" element={<Testimonials />} />

            <Route
              path="/news-updates"
              element={<GridConentTemplate template={newsUpdate_page} />}
            />
            <Route
              path="/project-outreach"
              element={<GridConentTemplate template={projectOutreach_page} />}
            />
            <Route path="/research-publication" element={<Research />} />
            <Route path="/awards-acknowledgement" element={<Awards />} />
            <Route path="/project/:name" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <hr />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
