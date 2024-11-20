import { Link } from "react-router-dom"
import LandingImg from "../../../public/images/LandingImg.png"

const imgStyle = {
    backgroundColor: "#f8f1e7",
    width: "98vw",
    height: "98vh"
}

const Landing = () => {
    return(
        <Link to={"/trips"}>
            <h1><img style={imgStyle} src={LandingImg} alt="Wanderlust Logo" /></h1>
        </Link>
    )
}

export default Landing