import { useState, useEffect, useContext } from "react";
import { useSwipeable } from "react-swipeable";
import {MediaContext} from "../../../../App";
import Testimonial from "./Testimonial/Testimonial";
import Slider from "./Slider/Slider";
import testimonialsData from "../testimonialsData.json";
import classes from "./Carousel.module.css";
const Carousel = () => {
  const isDesktop = useContext(MediaContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const changeActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < 3) {
        setActiveIndex(activeIndex + 1);
      } else if (activeIndex === 3) {
        setActiveIndex(0);
      }
    },
    onSwipedRight: () => {
      if (activeIndex === 0) {
        setActiveIndex(3);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else if (activeIndex === 1) {
        setActiveIndex(2);
      } else if (activeIndex === 2) {
        setActiveIndex(3);
      } else if (activeIndex === 3) {
        setActiveIndex(0);
      }
    }, 1000 * 10);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  return (
    <div className={classes.container}>
      <div
        {...handlers}
        className={`${classes.carousel} ${
          activeIndex === 0
            ? classes.position1
            : activeIndex === 1
            ? classes.position2
            : activeIndex === 2
            ? classes.position3
            : activeIndex === 3
            ? classes.position4
            : ""
        }`}
      >
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            index={index}
            name={testimonial.name}
            message={testimonial.message}
          />
        ))}
      </div>

      {!isDesktop && (
        <Slider
          changeActiveIndex={changeActiveIndex}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
};

export default Carousel;
