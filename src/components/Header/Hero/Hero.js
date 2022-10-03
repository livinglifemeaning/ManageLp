import Button from "../../Button/Button";
import Illustration from "./illustration-intro.svg"; 
import classes from "./Hero.module.css"; 
const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.textBox}>
        <h1 className={classes.title}>Bring everyone together to build better products.</h1>
        <p className={classes.paragraph}> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <Button color="dark"/>
      </div>
      <div className={classes.imageBox}>
        <img src={Illustration} alt="Three graphs"/>
      </div>
    </div>
  )
}

export default Hero
