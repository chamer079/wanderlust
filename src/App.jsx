import * as tripService from "./services/tripService"
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import TripList from "./components/TripList/TripList"
import TripDetails from "./components/TripDetails/TripDetails"
import TripForm from "./components/TripForm/TripForm"

const App = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const fetchTrips = async () => {
      const tripData = await tripService.index()
      console.log("tripData:", tripData)
      setTrips(tripData)
    }
    fetchTrips()
  }, [])

  return(
    <>
    <h1>Sanity Check (App.jsx)</h1>
    <Routes>
      <Route path="/trips" element={<TripList trips={trips} />}/>
      <Route path="/trips/:tripId" element={<TripDetails />} />
      <Route path="/trips/new" element={<TripForm />} />
    </Routes>
    </>
  )
}

export default App