import { useState, useEffect } from "react"
import * as tripService from "../../services/tripService"

const ItineraryForm = (props) => {
    const [formData, setFormData] = useState({
        itineraries: [{
            sight: "",
            activity: "",
            food: ""
        }]
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            
        })
    }

    return(
        <h1>New Itinerary Form to be imported into New Tripform</h1>
    )
}