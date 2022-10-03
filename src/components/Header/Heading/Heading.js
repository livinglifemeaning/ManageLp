import { useContext, useEffect, useState } from "react";
import { MediaContext } from "../../../App";
import { useScrollDirection } from "./useScrollDirection"; 
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"; 
import HeaderNav from "./HeaderNav/HeaderNav";
import Button from "../../Button/Button"; 
import Logo from "./header-logo.svg"; 
import classes from "./Heading.module.css"; 

const Heading = () => {
  const isDesktop = useContext(MediaContext);
  const scroll = useScrollDirection(); 
  const [navOpen, setNavOpen] = useState(false);  
  const toggleNav = () => {
    setNavOpen(prevState => !prevState)
  }
  useEffect(() => {
    if(isDesktop){
      setNavOpen(false); 
    }
    if(scroll === "down"){
      setNavOpen(false); 
    }
  }, [isDesktop, scroll])
  
  return (
    <div className={classes.heading}>
      <img src={Logo} alt="Easybank logo" className={classes.logo}/>
      {!isDesktop && <HamburgerMenu navOpen={navOpen} onClick={toggleNav}/>}
      {(isDesktop || navOpen) && <HeaderNav/> }
      {isDesktop && <Button color="dark"/>}
    </div>
  )
}

export default Heading
