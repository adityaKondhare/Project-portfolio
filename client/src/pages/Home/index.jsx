import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import Siderbar from "./Siderbar";
import { GlowProvider } from './UseGlow';


function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <GlowProvider>
        <Header />
        { portfolioData && (
          <div className="bg-primary px-40 mainCont">
            <Intro/>
            <About/>
            <Education/>
            <Experiences/>
            <Projects/>
            <Contact/>
            <Footer/>
            <Siderbar/>
          </div>
        )}
      </GlowProvider>
    </div>
  );
}

export default Home;