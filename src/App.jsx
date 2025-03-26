import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "../src/components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <ToastContainer pauseOnHover theme="dark" className=" text-white" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
