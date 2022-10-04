import {useContext} from "react"; 
import {MediaContext} from "../../../../App"; 
import classes from "./Feature.module.css";

const Feature = ({ number, title, paragraph }) => {
  const isDesktop = useContext(MediaContext); 

  const mobileContent = (
    <>
      <div className={classes.titleBox}>
        <div className={classes.number}>0{number}</div>
        <p className={classes.title}>{title}</p>
      </div>
      <p className={classes.paragraph}>{paragraph}</p>
    </>
  );
  
  const desktopContent = <>
  <div className={classes.number}>0{number}</div>
  <div className={classes.textBox}>
    <p className={classes.title}>{title}</p>
    <p className={classes.paragraph}>{paragraph}</p>
  </div>
  </>; 

  return <div className={classes.feature}>
    {isDesktop ? desktopContent : mobileContent}
  </div>;
};

export default Feature;
