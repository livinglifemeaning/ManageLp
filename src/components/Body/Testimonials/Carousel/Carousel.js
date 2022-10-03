import { useState, useContext } from "react";

import { MediaContext } from "../../../../App";
import testimonialsData from "./testimonialsData.json";
import Testimonial from "./Testimonial/Testimonial";
import classes from "./Carousel.module.css";

const Carousel = () => {

  const isDesktop = useContext(MediaContext);
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleSliderClick = (key) => {
    setSliderIndex(key);
  };

  return (
    <div className={classes.carousel}>
  <div className = {classes.testimonials}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            name={testimonial.name}
            message={testimonial.message}
            index={testimonial.index}
            key={index}
            sliderIndex={sliderIndex}
          />
        ))}
        {isDesktop && testimonialsData.map((testimonial, index) => (
          <Testimonial
            name={testimonial.name}
            message={testimonial.message}
            index={testimonial.index}
            key={index}
          />
        ))}
</div>
      {!isDesktop && (
        <div className={classes.slider}>
          {testimonialsData.map((testimonial, key) => (
            <div
              className={`${classes.button} ${
                sliderIndex === key ? classes.selected : ""
              }`}
              key={key}
              onClick={() => handleSliderClick(key)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
