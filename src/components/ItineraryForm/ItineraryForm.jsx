import { useState } from "react";
import "./ItineraryForm.css"


const ItineraryForm = (props) => {
  const [formData, setFormData] = useState({
    itineraries: {
        sight: "",
        activity: "",
        food: ""
      }
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddItinerary(formData)
    setFormData({ 
      sight: "", 
      activity: "", 
      food: "" 
    });
    
  };

  return (
    <form className="itinerary-form" onSubmit={handleSubmit}>
      <section className="todo-list-itinerary-form">
        <article className="sights-list">
          <label className="todo-label" htmlFor="sight-input">Sights:</label>
          <input 
            className="todo-input"
            type="text"
            name="sight"
            id="sight-input"
            value={formData.sight}
            onChange={handleChange}
          />
        </article>
        <article className="activities-list">
          <label className="todo-label" htmlFor="activity-input">Activities:</label>
          <input
            className="todo-input"
            type="text"
            name="activity"
            id="acitivity-input"
            value={formData.activity}
            onChange={handleChange}
          />
        </article>
        <article className="food-list">
          <label className="todo-label" htmlFor="food-input">Food:</label>
          <input
            className="todo-input"
            type="text"
            name="food"
            id="food-input"
            value={formData.food}
            onChange={handleChange}
          />
        </article>
      </section>
      <button className="todo-button" type="submit">+</button>
    </form>
  );
};

export default ItineraryForm;
