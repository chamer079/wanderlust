import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as tripService from "../../services/tripService";
import "./TripDetails.css";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import HomeLink from "../HomeLink/HomeLink";

const TripDetails = (props) => {
  const { tripId } = useParams();

  const [trip, setTrip] = useState();

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId);
      setTrip(tripData);
    };
    fetchTrip();
  }, [tripId]);

  if (!trip) {
    return <h1>Loading...</h1>;
  }

  const imgStyle = {
    width: "98vw",
    height: "50vh",
    border: "3px solid red",
  };

  const handleAddItinerary = async (itineraryFormData) => {
    const newItinerary = await tripService.createItinerary(
      tripId,
      itineraryFormData
    );
    setTrip({ ...trip, itineraries: [...trip.itineraries, newItinerary] });
  };

  return (
    <div className="trip-details">
      <div className="header">
        <HomeLink />
        <div className="header-content">
          <h1>Itinerary for {trip.destination}</h1>
          <div className="update-delete">
            <Link className="update" to={`/trips/${tripId}/edit`}>
              Update
            </Link>
            <button
              className="delete"
              onClick={() => props.handleDeleteTrip(tripId)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <header className="img-banner">
        <img style={imgStyle} src={trip.image} alt={trip.destination} />
      </header>
      <section className="time-money">
        <article className="date-duration">
          {!trip.date ? <h2>Add a Date</h2> : <h2>Date: {trip.date}</h2>}
          {!trip.duration ? (
            <h2>Add the Duration of the Trip.</h2>
          ) : (
            <h2>Druation: {trip.duration}</h2>
          )}
        </article>
        <article className="budget">
          <h2>Budget:</h2>
          <p>
            Accomendations: $
            {!trip.acommendationBudget ? 0 : trip.acommendationBudget}
          </p>
          <p>Shopping: ${!trip.shoppingBudget ? 0 : trip.shoppingBudget}</p>
          <p>
            Entertainment: $
            {!trip.entertainmentBudget ? 0 : trip.entertainmentBudget}
          </p>
          <p>Emergency: ${!trip.emergencyBudget ? 0 : trip.emergencyBudget}</p>
        </article>
      </section>
      <div className="todo-list">
        <section className="todo-list-form">
          <h2 className="todo-title">Things to See, Do, & Eat:</h2>
          <ItineraryForm handleAddItinerary={handleAddItinerary} />
        </section>
        <section className="todo-list-data">
          <>
            <h3>Sights:</h3>
            {trip.itineraries.map((itinerary) => (
              <article key={itinerary._id} className="sights">
                <ul>{itinerary.sight}</ul>
              </article>
            ))}
          </>
          <>
            <h3>Activities:</h3>
            {trip.itineraries.map((itinerary) => (
              <article key={itinerary._id} className="activities">
                <ul>{itinerary.activity}</ul>
              </article>
            ))}
          </>
          <>
            <h3>Food:</h3>
            {trip.itineraries.map((itinerary) => (
              <article key={itinerary._id} className="food">
                <ul>{itinerary.food}</ul>
              </article>
            ))}
          </>
        </section>
      </div>
    </div>
  );
};

export default TripDetails;
