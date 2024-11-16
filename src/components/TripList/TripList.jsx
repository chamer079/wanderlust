import { Link } from "react-router-dom";

const TripList = (props) => {
  return (
    <>
      <h1>Places I would like to visit...</h1>
      <div>
        {props.trips.map((trip) => (
          <Link key={trip._id} to={`/trips/${trip._id}`}>
            <div>
              <img src={trip.image} alt={trip.destination} />
              <h2>{trip.destination}</h2>
              {!trip.date ? <h3>TBD</h3> : <h3>{trip.date}</h3>}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TripList;
