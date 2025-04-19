import React from "react";
import { motion } from "framer-motion";

interface VerticalImageSliderProps {
  images: string[];
}

const VerticalImageSlider: React.FC<VerticalImageSliderProps> = ({
  images,
}) => {
  return (
    <div
      className="slider-container"
      style={{ overflow: "hidden", width: "100%" }}
    >
      <motion.div
        className="slider"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        animate={{ y: ["0%", "-100%"] }}
        transition={{
          duration: images.length * 5, // Adjust speed by changing the duration
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {images.concat(images).map((image, index) => (
          <motion.img
          src={image}
            key={index}
            className="slide"
            // style={{
            //   minHeight: "100vh",
            //   backgroundImage: `url(${image})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          />
        ))}
      </motion.div>
      
    </div>
  );
};

export default VerticalImageSlider;
