import React from "react";
import unsplaceimg1 from "../assets/unsplaceimg1.jpg";

const Herosection = () => {
  return (
    <div className="w-full">
      <img
        src={unsplaceimg1}
        alt="unsplace"
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md"
      />
    </div>
  );
};

export default Herosection;
