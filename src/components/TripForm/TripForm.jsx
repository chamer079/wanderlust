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
        emergencyBudget: ""
        
    })
    // console.log(formData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddTrip(formData)
        // console.log("formData: ", formData)
        setFormData({
            destination: "",
            image: "",
            date: "",
            duration: "",
            accomendationBudget: "",
            shoppingBudget: "",
            entertainmentBudget: "",
            emergencyBudget: ""
        })
        console.log("formData: ", formData)
    }

    return(
        <>
            <h1>Create a New Trip</h1>
            <form onSubmit={handleSubmit}>
                <section className="destinationImg">
                    <label htmlFor="destination-input">Destination:</label>
                    <input 
                        type="text"
                        name="destination"
                        id="destination-input"
                        value={setFormData.destination}
                        onChange={handleChange}
                    
                    />
                    <label htmlFor="image-input">Image:</label>
                    <input 
                        type="text"
                        name="image"
                        id="image-input"
                        value={setFormData.image}
                        onChange={handleChange}
                       
                    />
                </section>
                <section className="DateBudget">
                    <article className="DateDuration">
                        <label htmlFor="date-input">Date:</label>
                        <input 
                            type="text"
                            name="date"
                            id="date-input"
                            value={setFormData.date}
                            onChange={handleChange}
                        />
                        <label htmlFor="duration-input">Duration:</label>
                        <input 
                            type="text"
                            name="duration"
                            id="dutation-input"
                            value={setFormData.duration}
                            onChange={handleChange}
                        />
                    </article>
                    <article className="budget">
                        <h3>Budget:</h3>
                        <label htmlFor="accomendationBudget-input">Accomendations Budget:</label>
                        <input 
                            type="number"
                            name="accomendationBudget"
                            id="accomendationBudget-input"
                            value={setFormData.accomendationBudget}
                            onChange={handleChange}
                        />
                        <label htmlFor="shoppingBudget-input">Shopping Budget:</label>
                        <input 
                            type="number"
                            name="shoppingBudget"
                            id="shoppingbudget-input"
                            value={setFormData.shoppingBudget}
                            onChange={handleChange}
                        />
                         <label htmlFor="entertainmentBudget-input">Entertainment Budget:</label>
                        <input 
                            type="number"
                            name="entertainmentBudget"
                            id="entertainmentBudget-input"
                            value={setFormData.entertainmentBudget}
                            onChange={handleChange}
                        />
                         <label htmlFor="emergencyBudget-input">Emergency Budget:</label>
                        <input 
                            type="number"
                            name="emergencyBudget"
                            id="emergencyBudget-input"
                            value={setFormData.emergencyBudget}
                            onChange={handleChange}
                        />
                    </article>
                </section>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TripForm