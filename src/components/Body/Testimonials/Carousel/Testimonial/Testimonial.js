import Anisha from "./avatar-anisha.png"; 
import Ali from "./avatar-ali.png"; 
import Richard from "./avatar-richard.png"; 
import Shanai from "./avatar-shanai.png"; 
import classes from "./Testimonial.module.css";
const IMAGES = [Anisha, Ali, Richard, Shanai]; 
const Testimonial = ({index, name, message, sliderIndex}) => {
  return (
    <div className={`${classes.testimonial} ${sliderIndex === index ? classes.show : ""}`}>
      <img src={IMAGES[index]} alt="" className={classes.profile}/>
      <p className={classes.name}>{name}</p>
      <p className={classes.message}>{message}</p>
    </div>
  )
}

export default Testimonial
