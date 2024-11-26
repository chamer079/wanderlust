import { Link } from "react-router-dom";
import LandingImg from "/src/images/LandingImg.png";
import "./Landing.css";

const Landing = () => {
  return (
    <Link to={"/trips"}>
      <h1>
        <img src={LandingImg} alt="Wanderlust Logo" />
      </h1>
    </Link>
  );
};

export default Landing;
