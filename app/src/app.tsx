import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "@/pages/home";
import AdventuresPage from "@/pages/adventures";
import StayPage from "@/pages/stay";
import CityToursPage from "@/pages/city-tours";
import AirportPage from "@/pages/airport";
import AiPlannerPage from "@/pages/ai-planner";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import { AuthPage } from "@/pages/auth";
import NotFoundPage from "@/pages/not-found";

/** Scroll to top on every route change (mobile scrolls an inner container). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adventures" element={<AdventuresPage />} />
        <Route path="/stay" element={<StayPage />} />
        <Route path="/city-tours" element={<CityToursPage />} />
        <Route path="/airport" element={<AirportPage />} />
        <Route path="/ai-planner" element={<AiPlannerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signin" element={<AuthPage mode="signin" />} />
        <Route path="/get-started" element={<AuthPage mode="signup" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
