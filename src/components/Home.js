import "../styles/Home/Home.css"
import { Link } from "react-router-dom"
import homeImage from '../imgs/home-img.webp'

const Home = () => {
    return(
        <div className="home-page">
            <h1 className="home-title">Welcome</h1>
            <button className="enter-button"><Link to="/portfolio"><img className="enter-img" src={homeImage} alt="Enter Site" /></Link></button>
            <Link to="/contact"><button className="contact-button">Contact</button></Link>
        </div>
    )
}
 
export default Home;