// frontend/src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import HomeAnimation from "../components/home/HomeAnimation";
import YogaBenefits from "../components/home/YogaBenefits";
import YogaPoseExplorer from "../components/home/YogaPoseExplorer";


const Home = () => {
  return (

<>
   
    <HeroSection />
    <HomeAnimation />
    <YogaBenefits />
    <YogaPoseExplorer />





</>


 
  );
};

export default Home;
