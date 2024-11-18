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
        // itineraries: [{
        //     sight: "",
        //     activity: "",
        //     food: "",
        // }]
    })
    // console.log(formData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("formData: ", formData)
        props.handleAddTrip(formData)
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
                        value={formData.destination}
                        onChange={handleChange}
                    
                    />
                    <label htmlFor="image-input">Image:</label>
                    <input 
                        type="text"
                        name="image"
                        id="image-input"
                        value={formData.image}
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
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <label htmlFor="duration-input">Duration:</label>
                        <input 
                            type="text"
                            name="duration"
                            id="dutation-input"
                            value={formData.duration}
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
                            value={formData.accomendationBudget}
                            onChange={handleChange}
                        />
                        <label htmlFor="shoppingBudget-input">Shopping Budget:</label>
                        <input 
                            type="number"
                            name="shoppingBudget"
                            id="shoppingbudget-input"
                            value={formData.shoppingBudget}
                            onChange={handleChange}
                        />
                         <label htmlFor="entertainmentBudget-input">Entertainment Budget:</label>
                        <input 
                            type="number"
                            name="entertainmentBudget"
                            id="entertainmentBudget-input"
                            value={formData.entertainmentBudget}
                            onChange={handleChange}
                        />
                         <label htmlFor="emergencyBudget-input">Emergency Budget:</label>
                        <input 
                            type="number"
                            name="emergencyBudget"
                            id="emergencyBudget-input"
                            value={formData.emergencyBudget}
                            onChange={handleChange}
                        />
                    </article>
                </section>
                {/* <section className="todoList">
                    <h3>Things to See, Do, & Eat:</h3>
                    <article className="sightsList">
                        <label htmlFor="sight-input">Sights:</label>
                        <textarea 
                            type="text"
                            rows={10}
                            cols={20}
                            name="sight"
                            id="sight-input"
                            value={formData.itineraries.sight}
                            onChange={handleChange}
                        />
                    </article>
                    <article className="activitiesList">
                        <label htmlFor="activity-input">Activities:</label>
                        <textarea 
                        type="text"
                        rows={10}
                        cols={20}
                        name="activity"
                        id="activity-input"
                        value={formData.itineraries.activity}
                        onChange={handleChange}
                        />
                    </article>
                    <article className="foodList">
                        <label htmlFor="food-input">Food:</label>
                        <textarea 
                            type="text"
                            rows={10}
                            cols={20}
                            name="food"
                            id="food-input"
                            value={formData.itineraries.food}
                            onChange={handleChange}
                        />
                    </article>
                    </section> */}
                    <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TripForm