import * as tripService from "./services/tripService"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import TripList from "./components/TripList/TripList"


const App = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const fetchAllTrips = aync () => {
      const tripData = await tripService.index()
      console.log("tripData:", tripData)
    }
  }, [])

  return(
    <h1>Sanity Check</h1>
  )
}

export default App