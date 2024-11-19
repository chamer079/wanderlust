import { useState, useEffect } from "react";
import * as tripService from "../../services/tripService";

const ItineraryForm = (props) => {
  const [formData, setFormData] = useState({
    itineraries: [
      {
        sight: [""],
        activity: [""],
        food: [""]
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddItinerary(formData)
    setFormData({ sight: "", activity: "", food: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="todoList">
        <h3>Things to See, Do, & Eat:</h3>
        <article className="sightsList">
          <label htmlFor="sight-input">Sights:</label>
          <textarea
            type="text"
            rows={10}
            cols={20}
            name="sight"
            id="sight-input"
            value={formData.sight}
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
            id="acitivity-input"
            value={formData.activity}
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
            value={formData.food}
            onChange={handleChange}
          />
        </article>
      </section>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItineraryForm;
