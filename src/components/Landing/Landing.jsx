import { Link } from "react-router-dom"


const Landing = () => {
    return(
        <Link to={"/trips"}>
            <h1>Landing Page</h1>
        </Link>
    )
}

export default Landing