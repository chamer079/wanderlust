import { Link } from "react-router-dom";

const TripList = (props) => {
  return (
    <>
      <h1>Places I would like to visit...</h1>
      <Link to="/trips/new">
      <article>
        <h2>+</h2>
        <h2>Add a New Destination</h2>
      </article>
      </Link>
      <>
        {props.trips.map((trip) => (
          <Link key={trip._id} to={`/trips/${trip._id}`}>
            <article>
              <img src={trip.image} alt={trip.destination} />
              <h2>{trip.destination}</h2>
              {!trip.date ? <h3>Date: TBD</h3> : <h3>{trip.date}</h3>}
            </article>
          </Link>
        ))}
      </>
    </>
  );
};

export default TripList;
