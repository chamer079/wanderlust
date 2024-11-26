import { Link } from "react-router-dom";
import "./TripList.css";
import HomeLink from "../HomeLink/HomeLink";

const TripList = (props) => {
  const cardImgStyle = {
    width: "225px",
    height: "300px",
  };

  return (
    <div className="trip-list">
      <div className="header">
        <HomeLink />
        <div className="header-content">
          <h1>Places I would like to visit...</h1>
        </div>
      </div>
      <div className="cards">
        <Link style={{ textDecoration: "none" }} to="/trips/new">
          <article className="new-card">
            <h2 className="plus-sign">+</h2>
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
    </div>
  );
};

export default TripList;
