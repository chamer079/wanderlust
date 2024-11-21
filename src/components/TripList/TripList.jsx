import { Link } from "react-router-dom";
import "./TripList.css";
import HomeButton from "../../../public/images/HomeButton.png";

const TripList = (props) => {
  const homeButtonStyle = {
    width: "100px",
    height: "100px",
  };

  const cardImgStyle = {
    width: "225px",
    height: "302px",
  };

  return (
    <div className="trip-list">
      <Link to="/trips">
        <img src={HomeButton} style={homeButtonStyle} />
      </Link>
      <h1>Places I would like to visit...</h1>
      <Link style={{ textDecoration: "none" }} to="/trips/new">
        <article className="new-card">
          <h2>+</h2>
          <h2>Add a New Destination</h2>
        </article>
      </Link>
      <>
        {props.trips.map((trip) => (
          <Link
            key={trip._id}
            style={{ textDecoration: "none" }}
            to={`/trips/${trip._id}`}
          >
            <article className="trip-card">
              <div className="card-img">
                <img
                  style={cardImgStyle}
                  src={trip.image}
                  alt={trip.destination}
                />
              </div>
              <div className="card-content">
                <h2>{trip.destination}</h2>
                {!trip.date ? <h3>Date: TBD</h3> : <h3>{trip.date}</h3>}
              </div>
            </article>
          </Link>
        ))}
      </>
    </div>
  );
};

export default TripList;
