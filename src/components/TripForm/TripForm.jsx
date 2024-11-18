import { useState } from "react"


const TripForm = (props) => {
    const [formData, setFormData] = useState({
        destination: "",
        image: "",
        date: "",
        duration: "",
        accomendationBudget: "",
        shoppingBudget: "",
        entertainmentBudget: "",
        emergencyBudget: "",
        itineraries: [{
            sight: "",
            activity: "",
            food: "",
        }]
    })
    console.log(formData)

    return(
        <h1>Create Trip Page</h1>
    )
}

export default TripForm