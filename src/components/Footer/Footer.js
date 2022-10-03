import { useContext } from "react";
import { MediaContext } from "../../App";
import SocialMediaBar from "./SocialMediaBar/SocialMediaBar";
import FooterNav from "./FooterNav/FooterNav";
import Logo from "./footer-logo.svg";
import classes from "./Footer.module.css";

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
      className={classes.input}
      placeholder="Updates in your inbox..."
    />
    <div className={classes.btn}>Go</div>
  </div>
);

const Footer = () => {
  const isDesktop = useContext(MediaContext);

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
