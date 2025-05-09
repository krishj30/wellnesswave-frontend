import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services";
import About from "./components/About";
import Resource from "./components/Resource";
import WorkingStep from "./components/WorkingStep.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Convo from "./components/Convo.jsx"; 
import Stories from "./components/Stories.jsx"; 
import Seekingsupport from "./components/Seekingsupport.jsx";
import Support1 from "./components/Support1.jsx";
import Support2 from "./components/Support2.jsx";
import Support3 from "./components/support3.jsx";
import Stayingwell from "./components/Stayingwell.jsx";
import Takingcare from "./components/Takingcare.jsx";
import Identity from "./components/Identity.jsx";
import Mentalhealth from "./components/Mentalhealth.jsx";
import UnderstandingDepression from "./components/Understandingdepression.jsx";
import Relationship from "./components/Relationship.jsx";
import UnderstandingAnxiety from "./components/Understandinganxiety.jsx";
import Alcohol from "./components/Alcohol.jsx";
import Question from './components/Question';
import AnxietyPrediction from "./components/AnxietyPrediction.jsx";
import Game1 from './components/Games/Game1.jsx';
import DepressionForm from "./components/Depressionform.jsx";
import MentalHealthResources from './components/MentalHealthResources';
import CalmingExercises from './components/CalmingExercises';
// Update the import statement to match your file structure
import SelfTests from './components/SelfTests';  // Remove .jsx extension

// Scroll to Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

// Back to Top Button
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#476685] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#2C4A6B] transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        ↑ Back to Top
      </button>
    )
  );
}

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <WorkingStep />
    <Resource />
    <Contact />
  </>
);

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
            const topPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
              top: topPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="font-primary flex flex-col min-h-screen bg-[#f7f8fc]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/self-tests" element={<SelfTests />} />

          <Route path="/start-conversation" element={<Convo />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/seekingsupport" element={<Seekingsupport />} />
          <Route path="/support1" element={<Support1 />} />
          <Route path="/support2" element={<Support2 />} />
          <Route path="/support3" element={<Support3 />} />
          <Route path="/stayingwell" element={<Stayingwell />} />
          <Route path="/takingcare" element={<Takingcare />} />
          <Route path="/identity" element={<Identity />} />
          <Route path="/mentalhealth" element={<Mentalhealth />} />
          <Route path="/understandingdepression" element={<UnderstandingDepression />} />
          <Route path="/relationship" element={<Relationship />} />
          <Route path="/understandinganxiety" element={<UnderstandingAnxiety />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/question" element={<Question />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/anxietyprediction" element={<AnxietyPrediction />} />
          <Route path="/depressionform" element={<DepressionForm />} />
          <Route path="/resources" element={<MentalHealthResources />} />
          <Route path="/self-tests" element={<SelfTests />} />
        </Routes>
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
