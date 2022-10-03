import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Pinterest from "./Icons/Pinterest";
import Twitter from "./Icons/Twitter";
import YouTube from "./Icons/YouTube";
import classes from "./SocialMediaBar.module.css"; 

const SocialMediaBar = () => {
  let color = "#FFF"; 
  let hoverColor = "#f25f3a"; 
  return (
    <div className={classes.bar}>
      <Facebook color={color} hoverColor={hoverColor}/>
      <YouTube color={color} hoverColor={hoverColor}/>
      <Twitter color={color} hoverColor={hoverColor}/>
      <Pinterest color={color} hoverColor={hoverColor}/>
      <Instagram color={color} hoverColor={hoverColor}/>
    </div>
  )
}

export default SocialMediaBar
