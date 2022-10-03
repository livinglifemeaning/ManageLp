import classes from "./Body.module.css"; 
import CTA from "./CTA/CTA";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";

const Body = () => {
  return (
    <div className={classes.body}>
      <Features/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Body
