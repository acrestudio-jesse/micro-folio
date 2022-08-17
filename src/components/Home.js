import "../styles/Home/Home.css";
import { Link } from "react-router-dom";
import homeImage from "../imgs/home-img.webp";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{opacity: 1 }}
      exit={{
  overflow: "hidden",

        opacity: 0,
        x: "100px",
        transition: { duration: .3 },
      }}
    >
      <h1 className="home-title">Welcome</h1>
      <button className="enter-button">
        <Link to="/portfolio">
          <img className="enter-img" src={homeImage} alt="Enter Site" />
        </Link>
      </button>
      <Link to="/contact">
        <button className="contact-button">Contact</button>
      </Link>
    </motion.div>
  );
};

export default Home;
