import PortHead from "./portfolio-components/PortHeader";
import PortProjects from "./portfolio-components/PortProjects";
import PortSocials from "./portfolio-components/PortSocials";
import PortTech from "./portfolio-components/PortTech";
import {motion} from "framer-motion"


const Portfolio = ({projectData, techData}) => {
  return (
    <>
    <motion.div className="portfolio-page"
    initial={{opacity: 0, x: "-100px"}}
    animate={{opacity:1, x: 0}}
    exit={{opacity:0}}
    >
      <PortHead/>
      <PortProjects projectData={projectData}/>
      <PortTech techData= {techData}/>
      <PortSocials/>
    </motion.div>
    </>
  );
};

export default Portfolio;
