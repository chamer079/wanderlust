import { Link } from "react-router-dom";
import HomeButton from "../../../public/images/HomeButton.png";

const HomeLink = () => {
  const homeButtonStyle = {
    width: "125px",
    height: "125px",
  };

  return (
    <Link to="/trips">
      <img src={HomeButton} style={homeButtonStyle} />
    </Link>
  );
};

export default HomeLink;