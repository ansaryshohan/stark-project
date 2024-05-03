import FeaturesSection from "./components/Features/FeaturesSection";
import FifthSection from "./components/FifthSection/FifthSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import LastSection from "./components/LastSection/LastSection";
import NavBar from "./components/Navbar/NavBar";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import VideoHeroSection from "./components/VideoHeroSection/VideoHeroSection";
import FourthSection from "./components/fourthSection/FourthSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection/>
      <VideoHeroSection/>
      <FourthSection/>
      <FifthSection/>
      <ReviewSection/>
      <LastSection/>
      <Footer/>
    </>
  );
}

export default App;
