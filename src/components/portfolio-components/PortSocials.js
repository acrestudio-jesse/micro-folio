import { Link } from "react-router-dom";
import "../../styles/Portfolio/PortSocials.css";

const PortSocials = () => {
  return (
    <div className="socials-section">
      <h1 className="socials-title">Socials</h1>
      <div className="socials-columns">
        <div className="socials-links">
          <div className="social">Instagram</div>
          <div className="social">Twitter</div>
          <div className="social">LinkedIn</div>
          <div className="social">ArtStation</div>
        </div>
        <div className="credits">
          <p>Website Designed by Jesse Hickey</p>
          <p>Acre Illustration Studio™️</p>
        </div>
      </div>
      <Link to="/contact">
        <button className="contact-button">Contact</button>
      </Link>
    </div>
  );
};

export default PortSocials;
