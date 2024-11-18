import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as tripService from "../../services/tripService";

const TripDetails = () => {
  const { tripId } = useParams();
  // console.log("tripId:", tripId)

  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId);
      console.log("tipData:", tripData);
      setTrip(tripData);
    };
    fetchTrip();
  }, [tripId]);
  console.log("trip state:", trip);

  if (!trip) {
    return <h1>Loading...</h1>;
  }

  const imgStyle = {
    width: "98vw",
    height: "400px",
    border: "3px solid red"
  }

  return (
    <>
      <h1>Itinerary for {trip.destination}</h1>
      <header>
        <img style={imgStyle} src={trip.image} alt={trip.destination} />
      </header>
      <section className="timeAndMoney">
        <article className="dateDuration">
            {!trip.date ? <h2>Add a Date</h2> : <h2>Date: {trip.date}</h2>}
            {!trip.duration ? <h2>Add the Duration of the Trip.</h2> : <h2>Druation: {trip.duration}</h2>}
        </article>
        {/* <article className="budget">
            <h2>{{tips.}Budget: {}}</h2>
            <p>Accomendations: {trip.budgets.a}</p>
        </article> */}
      </section>
      <section className="todoList">
        <h2>Things to See, Do, & Eat:</h2>
        <article className="sights">
            <h3>Sights:</h3>
            <ul>

            </ul>
        </article>
        <article className="activities">
        <h3>Activities:</h3>
            <ul>

            </ul>
        </article>
        <article className="food">
        <h3>Food:</h3>
            <ul>

            </ul>
        </article>
      </section>
    </>
  );
};

export default TripDetails;
