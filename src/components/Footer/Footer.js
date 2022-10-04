import { useContext, useRef, useState } from "react";
import { MediaContext } from "../../App";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import FooterNav from "./FooterNav/FooterNav";
import Logo from "./footer-logo.svg";
import classes from "./Footer.module.css";



const Footer = () => {
  const isDesktop = useContext(MediaContext);
  const inputRef = useRef(); 
  const [emailValid, setEmailValid] = useState("undefined")

  const validateEmail = () => {
    if(inputRef.current.value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmailValid("true")
    } else{
      setEmailValid("false"); 
    }
  }
console.log(emailValid); 
  const LogoAndSocial = (
    <>
      <img src={Logo} alt="Easybank logo" className={classes.logo} />
      <SocialMediaBar />
    </>
  );
  
  const InputBox = (
    <div className={classes.inputBox}>
      <input
        type="text"
        className={`${classes.input} ${emailValid === "false" && classes.invalid}`}
        placeholder="Updates in your inbox..."
        ref={inputRef}
      />
      <div className={classes.btn} onClick={validateEmail}>Go</div>

      {emailValid === "false" && <p className={classes.invalidMsg}>Please insert a valid email</p>}
    </div>
    
  );

  return (
    <div className={classes.footer}>
      <div className={classes.sectionOne}>
        {isDesktop ? LogoAndSocial : InputBox}
      </div>
      <div className={classes.sectionTwo}>
        <FooterNav />
      </div>
      <div className={classes.sectionThree}>
        {isDesktop ? InputBox : LogoAndSocial}
        {isDesktop && <p className={classes.copyright}>Copyright 2020. All Rights Reserved</p>}
      </div>
      {!isDesktop && <p className={classes.copyright}>Copyright 2020. All Rights Reserved</p>}
    </div>
  );
};

export default Footer;
