import React from "react";
import Navbar from "./Component/Navbar";
import Brands from "./Pages/Brands";
// import Herosection from "./Pages/Herosection";
// import Productsshower from "./Pages/ProductsShowcase";
// import ServicesSection from "./Pages/ServicesSection";
// import Testimonals from "./Pages/Testimonials";
import Header from "./Component/Header";
// import StepsSection from "./Pages/StepsSection";
// import BlogSlider from "./Pages/BlogSlider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Brands />
      {/* <Herosection />
      <StepsSection />
      <BlogSlider /> */}

      {/* <ServicesSection />
      <Productsshower />
      <Testimonals /> */}
    </div>
  );
};

export default App;
