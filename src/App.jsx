import React from "react";
import Navbar from "./Component/Navbar";
import Brands from "./Pages/Brands";
import Herosection from "./Pages/Herosection";
import ProductsShowcase from "./Pages/ProductsShowcase";
import ServicesSection from "./Pages/ServicesSection";
// import Testimonals from "./Pages/Testimonials";
import Header from "./Component/Header";
import Happy from "./Pages/Happy";
import StepsSection from "./Pages/StepsSection";
import BlogSlider from "./Pages/BlogSlider";
import GetTouch from "./Pages/GetTouch";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Brands />
      <Herosection />
      <StepsSection />
      <BlogSlider />
      <ServicesSection />
      <ProductsShowcase />
      <Happy />

      <GetTouch />
      {/* <Testimonals /> */}
    </div>
  );
};

export default App;
