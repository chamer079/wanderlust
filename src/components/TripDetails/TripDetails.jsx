import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as tripService from "../../services/tripService";
import ItineraryForm from "../ItineraryForm/ItineraryForm";

const TripDetails = (props) => {
  const { tripId } = useParams();
  // console.log("tripId:", tripId)

  const [trip, setTrip] = useState();

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId);
      //   console.log("tipData:", tripData);
      setTrip(tripData);
    };
    fetchTrip();
  }, [tripId]);
  //   console.log("trip state:", trip);

  if (!trip) {
    return <h1>Loading...</h1>;
  }

  const imgStyle = {
    width: "98vw",
    height: "400px",
    border: "3px solid red",
  };

  const handleAddItinerary = async (itineraryFormData) => {
    console.log("itineraryFormData: ", itineraryFormData);
    const newItinerary = await tripService.createItinerary(
      tripId,
      itineraryFormData
    );
    setTrip({ ...trip, itineraries: [...trip.itineraries, newItinerary] });
  };
  
  
  const handleDeleteItinerary = async (itineraryId) => {
    console.log("itineraryId", itineraryId)
    try {
      const deletedItinerary = await tripService.deleteItinerary(itineraryId)
      if(deletedItinerary.error){
        throw new Error(deletedItinerary.error)
      }
      setTrip({
        ...trip,
        itineraries: trip.itineraries.fileter((itinerary) => itinerary._id !== itineraryId)
      })
    }catch (error) {
      console.log(error)
    }
  }
  handleDeleteItinerary
  
  // const totalBudget = () => {

  //         trip.accomendationBudget,
  //         trip.shoppingBudget,
  //         trip.entertainmentBudget,
  //         trip.emergencyBudget

  //     const total = Object.values.
  // }
  // console.log(totalBudget())

  return (
    <>
      <div>
        <h1>Itinerary for {trip.destination}</h1>
        <Link to={`/trips/${tripId}/edit`}>Update</Link>
        <button onClick={() => props.handleDeleteTrip(tripId)}>Delete</button>
      </div>
      <header>
        <img style={imgStyle} src={trip.image} alt={trip.destination} />
      </header>
      <section className="timeAndMoney">
        <article className="dateDuration">
          {!trip.date ? <h2>Add a Date</h2> : <h2>Date: {trip.date}</h2>}
          {!trip.duration ? (
            <h2>Add the Duration of the Trip.</h2>
          ) : (
            <h2>Druation: {trip.duration}</h2>
          )}
        </article>
        <article className="budget">
          <h2>Budget:$</h2>
          <p>Accomendations: ${!trip.acommendationBudget ? 0 : trip.acommendationBudget}</p>
          <p>Shopping: ${!trip.shoppingBudget ? 0 : trip.shoppingBudget}</p>
          <p>Entertainment: ${!trip.entertainmentBudget ? 0 : trip.entertainmentBudget}</p>
          <p>Emergency: ${!trip.emergencyBudget ? 0 : trip.emergencyBudget}</p>
        </article>
      </section>
      <section className="todoList">
        <h2>Things to See, do, & Eat</h2>
        <ItineraryForm handleAddItinerary={handleAddItinerary} />
      </section>
      <section className="todoList">
        <h2>Things to See, Do, & Eat:</h2>
        <>
          <h3>Sights:</h3>
          {trip.itineraries.map((itinerary) => (
            <article key={itinerary._id} className="sights">
              <ul>
                {itinerary.sight}
                <button onClick={() => props.handleDeleteItinerary(itinerary)}>X</button>
              </ul>
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
    </>
  );
};

export default TripDetails;
