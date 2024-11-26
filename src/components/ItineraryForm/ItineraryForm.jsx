import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItineraryForm.css";

const ItineraryForm = (props) => {
  const navigate = useNavigate();
  const { tripId } = useParams();

  const [formData, setFormData] = useState({
    text: "",
    category: "sights",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddItinerary(formData);
    setFormData({
      text: "",
      category: "sights",
    });
    navigate(`/trips/${tripId}`);
  };

  return (
    <form className="itinerary-form" onSubmit={handleSubmit}>
      <label htmlFor="text-input">Todo:</label>
      <input
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <label htmlFor="category-input">Choose Category:</label>
      <select name="category" id="category-input" onChange={handleChange}>
        <option value="sights">Sights</option>
        <option value="activities">Activity</option>
        <option value="food">Food</option>
      </select>
      <button className="todo-button" type="submit">
        +
      </button>
    </form>
  );
};

export default ItineraryForm;
