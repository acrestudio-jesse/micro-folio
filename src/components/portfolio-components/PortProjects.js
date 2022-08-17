import "../../styles/Portfolio/PortProjects.css";
import CardContainer from "../project-card/CardContainer";

const PortProjects = ({ projectData }) => {
  return (
    <div className="project-section">
      <h1 className="project-title">Projects</h1>
        <CardContainer projectData={projectData} />
    </div>
  );
};

export default PortProjects;
