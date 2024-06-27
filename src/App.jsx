import React from "react";
import Nabvar from "./components/Nabvar";
import Home from "./components/Home";
import Estate from "./components/Estate";
import ServiceOfferings from "./components/ServiceOffering";
import Insights from "./components/Insights";
import Inquiries from "./components/Inquiries";
import PropInquiries from "./components/PropInquiries";
import OurExperties from "./components/OurExperties";
import YourPeace from "./components/YourPeace";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";


const App = () => {
  return (
    <>
      <Nabvar />
      <Home/>
      <Estate/>
      <ServiceOfferings/>
      <Insights/>
      <Inquiries/>
      <PropInquiries/>
      <OurExperties/>
      <YourPeace/>
      <Testimonials/>
      <Questions/>
      <Contact/>
      <Bottom/>
    </>
  );
};

export default App;
