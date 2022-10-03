import Feature from "./Feature/Feature";
import featuresData from "./featuresData.json";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <div className={classes.features}>
      <div className={classes.sectionOne}>
        <h2 className={classes.title}>What's different about Manage?</h2>
        <p className={classes.paragraph}>
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
        </p>
      </div>
      <div className={classes.sectionTwo}>
        {featuresData.map((feature) => (
          <Feature
            number={feature.number}
            title={feature.title}
            paragraph={feature.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
