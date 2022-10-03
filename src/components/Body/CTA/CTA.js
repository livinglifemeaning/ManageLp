import { useContext } from "react";
import { MediaContext } from "../../../App";
import AccentDesktop from "./bg-simplify-section-desktop.svg"; 
import AccentMobile from "./bg-simplify-section-mobile.svg"; 
import Button from "../../Button/Button";
import classes from "./CTA.module.css"; 

const CTA = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>Simplify how your team works today.</h2>
      <Button color="light"/>
      <img src={isDesktop ? AccentDesktop : AccentMobile} alt="" className={classes.accent}/>
    </div>
  )
}

export default CTA
