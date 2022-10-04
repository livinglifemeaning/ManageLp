import React from 'react'
import classes from "./Slider.module.css"; 
const Slider = ({activeIndex, changeActiveIndex}) => {
  return (
    <div className={classes.slider}>
        <div
          className={`${classes.button} ${activeIndex === 0 && classes.active}`}
          onClick={() => changeActiveIndex(0)}
        />
        <div
          className={`${classes.button} ${activeIndex === 1 && classes.active}`}
          onClick={() => changeActiveIndex(1)}
        />
        <div
          className={`${classes.button} ${activeIndex === 2 && classes.active}`}
          onClick={() => changeActiveIndex(2)}
        />
        
        <div
          className={`${classes.button} ${activeIndex === 3 && classes.active}`}
          onClick={() => changeActiveIndex(3)}
        />
      </div>
  )
}

export default Slider
