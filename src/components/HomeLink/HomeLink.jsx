import { Link } from "react-router-dom";
import HomeButton from "/src/images/HomeButton.png";

const HomeLink = () => {
  const homeButtonStyle = {
    width: "125px",
    height: "125px",
  };

  return (
    <Link className="home-link" to="/trips">
      <img src={HomeButton} style={homeButtonStyle} />
    </Link>
  );
};

export default HomeLink;
