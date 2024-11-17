import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import * as tripService from "../../services/tripService"


const TripDetails = () => {
    const { tripId } = useParams()
    // console.log("tripId:", tripId)

    const [trip, setTrip] = useState(null)

    useEffect(() => {
        const fetchTrip = async () => {
            const tripData = await tripService.show(tripId)
            console.log("tipData:", tripData)
            setTrip(tripData)
        }
        fetchTrip()
    }, [tripId])
    console.log("trip state:", trip)

    return(
        <h1>Trip Detail Page</h1>
    )
}

export default TripDetails