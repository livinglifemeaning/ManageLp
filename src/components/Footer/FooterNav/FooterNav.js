import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <div className={classes.navBox}>
      <ul className={classes.nav}>
        <li>Home</li>
        <li>Pricing</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
      <ul className={classes.nav}>
        <li>Careers</li>
        <li>Community</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default FooterNav;
