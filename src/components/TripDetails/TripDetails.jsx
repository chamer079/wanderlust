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
      <h1>Itinerary for {trip.destination}</h1>
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
        <h2>Things to See, Do, & Eat:</h2>
        <>
        <h3>Sights:</h3>
          {trip.itineraries.map((itinerary) => (
            <article key={itinerary._id} className="sights">
              <ul>
                {!itinerary.sight ? <p>Add Sights to See</p> : <li>{itinerary.sight}</li>}
              </ul>
            </article>
          ))}
        </>
        <>
        <h3>Activities:</h3>
          {trip.itineraries.map((itinerary) => (
            <article key={itinerary._id} className="activities">
              <ul>
                {!itinerary.activity ? <p>Add Things to Do</p> : <li>{itinerary.activity}</li>}
              </ul>
            </article>
          ))}
        </>
        <>
        <h3>Food:</h3>
          {trip.itineraries.map((itinerary) => (
            <article key={itinerary._id} className="food">
              <ul>
                {!itinerary.food ? <p>Add Food to Eat</p> : <li>{itinerary.food}</li>}
              </ul>
            </article>
          ))}
        </>
      </section>
    </>
  );
};

export default TripDetails;
