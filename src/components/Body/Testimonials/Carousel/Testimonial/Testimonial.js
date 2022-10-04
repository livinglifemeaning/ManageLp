import Anisha from "./avatar-anisha.png";
import Ali from "./avatar-ali.png";
import Richard from "./avatar-richard.png";
import Shanai from "./avatar-shanai.png";

import React from "react";
import classes from "./Testimonial.module.css";
const IMAGES = [Anisha, Ali, Richard, Shanai];
const Testimonial = ({ index, name, message }) => {
  return (
    <div
      className={`${classes.testimonial} ${
        index === 0
          ? "item1"
          : index === 1
          ? "item2"
          : index === 2
          ? "item3"
          : index === 3
          ? "item4"
          : ""
      }`}
    >
      <img src={IMAGES[index]} alt="" />
      <p className={classes.name}>{name}</p>
      <p className={classes.message}>{message}</p>
    </div>
  );
};

export default Testimonial;
