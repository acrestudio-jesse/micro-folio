import PortHead from "./portfolio-components/PortHeader";
import PortProjects from "./portfolio-components/PortProjects";
import PortSocials from "./portfolio-components/PortSocials";
import PortTech from "./portfolio-components/PortTech";


const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <PortHead/>
      <PortProjects/>
      <PortTech/>
      <PortSocials/>
    </div>
  );
};

export default Portfolio;
