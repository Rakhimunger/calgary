import React from "react";
import Navbar from "./Component/Navbar";
import Brands from "./Pages/Brands";
import Herosection from "./Pages/Herosection";
// import Productsshower from "./Pages/ProductsShowcase";
// import ServicesSection from "./Pages/ServicesSection";
// import Testimonals from "./Pages/Testimonials";
import Header from "./Component/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Brands />
      <Herosection />
      {/* <ServicesSection />
      <Productsshower />
      <Testimonals /> */}
    </div>
  );
};

export default App;
