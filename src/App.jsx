import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PortfolioPage from "./pages/Portfolio.jsx";
import LicensesPage from "./pages/Licenses.jsx";
import ServicesPage from "./pages/Services.jsx";
import useReveal from "./lib/useReveal.js";

export default function App() {
  useReveal();

  // Start øverst på hver ny side (lenker med #anker håndteres av Home)
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/tjenester" element={<ServicesPage />} />
        <Route path="/lisenser" element={<LicensesPage />} />
      </Routes>
      <Footer />
    </>
  );
}
