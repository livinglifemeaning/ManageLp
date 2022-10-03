import classes from "./Button.module.css";

const Button = ({color}) => {
  return <div className={`${classes.btn} ${color === "dark" ? classes.dark : classes.light}`}>Get Started</div>;
};

export default Button;
