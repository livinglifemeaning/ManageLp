import { useContext } from "react";
import { MediaContext } from "../../../../App";
import classes from "./HeaderNav.module.css"; 

const HeaderNav = () => {
  const isDesktop = useContext(MediaContext); 
  return (
    <div className={`${classes.navBox} ${isDesktop ? classes.desktop : classes.mobile}`}>
    <ul className={classes.nav}>
      <li>Pricing</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Community</li>
    </ul>
    </div>
  )
}

export default HeaderNav
