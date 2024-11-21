import * as tripService from "./services/tripService";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TripList from "./components/TripList/TripList";
import TripDetails from "./components/TripDetails/TripDetails";
import TripForm from "./components/TripForm/TripForm";

const App = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      const tripData = await tripService.index();
      setTrips(tripData);
    };
    fetchTrips();
  }, []);

  const handleAddTrip = async (tripFormData) => {
    try {
      const newTrip = await tripService.create(tripFormData);
      setTrips([newTrip, ...trips]);
      navigate("/trips");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      const deletedTrip = await tripService.deleteTrip(tripId);
      if (deletedTrip.error) {
        throw new Error(deletedTrip.error);
      }

      setTrips(trips.filter((trip) => trip._id !== deletedTrip));
      navigate("/trips");
      window.location.reload();
      console.log("deletedTrip: ", tripId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTrip = async (tripId, tripFormData) => {
    const updateTrip = await tripService.updateTrip(tripId, tripFormData);

    setTrips(trips.map((trip) => (tripId === trip._id ? updateTrip : trip)));
    navigate(`/trips/${tripId}`);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trips" element={<TripList trips={trips} />} />
        <Route
          path="/trips/:tripId"
          element={<TripDetails handleDeleteTrip={handleDeleteTrip} />}
        />
        <Route
          path="/trips/new"
          element={<TripForm handleAddTrip={handleAddTrip} />}
        />
        <Route
          path="/trips/:tripId/edit"
          element={<TripForm handleUpdateTrip={handleUpdateTrip} />}
        />
        <Route path="*" element={<h2>404 - Something is amis</h2>} />
      </Routes>
    </>
  );
};

export default App;
