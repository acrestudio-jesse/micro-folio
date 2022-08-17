import Card from "./Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({ projectData }) => {
  console.log({projectData});
  return (
    <div className={styles.cardContainer}>
      {projectData.map((el, i) => {
        return (
          <Card bgImage={el.img} delay={i} key={i}>
            <div className={styles.overlay}>
              <h1 className={styles.projectTitle}>{el.title}</h1>
              <p>{el.description}</p>
              <div className={styles.urls}>
                <a href={el.gitUrl} className={styles.url}>
                  GitHub
                </a>
                <a href={el.liveUrl} className={styles.url}>
                  Site
                </a>
              </div>
              <div className={styles.tech}>
                {el.tech.map((tech) => {
                  return <h3 className={styles.techTag}>{tech}</h3>;
                })}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardContainer;
