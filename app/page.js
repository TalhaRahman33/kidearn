'use client'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import Topbar from "./components/Topbar";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import BlogThree from "./components/BlogThree";

import ServicesSection from "./components/homePageComponents/ServicesSection";
import AboutSection from "./components/homePageComponents/AboutSection";
import VideoSection from "./components/homePageComponents/VideoSection";
import ProgramsSection from "./components/homePageComponents/ProgramsSection";
import InstagramSection from "./components/homePageComponents/InstagramSection";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>
        <div className="page-wrapper">
          <Topbar />
          <Header />
          <Banner />
          <ServicesSection />
          <AboutSection />
          <Testimonials />
          <VideoSection />
          <ProgramsSection />
          <InstagramSection />
          <PricingSection />
          <BlogThree />
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}