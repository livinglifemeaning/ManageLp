import Button from "../../Button/Button";
import Carousel from "./Carousel/Carousel";


import classes from "./Testimonials.module.css"; 

const Testimonials = () => {
  return (
    <div className={classes.testimonials}>
      <h2 className={classes.title}>What they've said</h2>
      <Carousel/>
      <Button color="dark"/>
    </div>
  )
}

export default Testimonials
