import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/enquiry/:id" element={<Enquiry />} /> */}
          </Routes>
        </main>
        <hr />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
