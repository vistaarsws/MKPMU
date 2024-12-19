import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

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
import Blog from "./pages/Blog/Blog";
import Newsletters from "./pages/newsletters/Newsletters";
import Visitor from "./pages/Visitor/Visitor";

import {
  projectOutreach_page,
  newsUpdate_page,
  blogs_page,
} from "./utils/Constant";
import ScrollToTop from "./hooks/ScrollToTop";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <header className="sticky top-0 z-[99] bg-white">
          <Navbar />
        </header>
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/impact-story" element={<Impact />} />
            <Route path="/team/:name" element={<MemberProfile />} />
            <Route path="/testimonials" element={<Testimonials />} />

            <Route path="/visitor" element={<Visitor />} />
            <Route
              path="/news-updates"
              element={<GridConentTemplate template={newsUpdate_page} />}
            />
            <Route path="/newsletters" element={<Newsletters />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/project-outreach"
              element={<GridConentTemplate template={projectOutreach_page} />}
            />
            <Route path="/research-publication" element={<Research />} />
            <Route path="/awards-acknowledgement" element={<Awards />} />
            <Route path="/project/:name" element={<Project />} />
            <Route
              path="/blogs"
              element={<GridConentTemplate template={blogs_page} />}
            />
            <Route path="/blogs/:id" element={<Blog />} />
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
