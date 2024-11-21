import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as tripService from "../../services/tripService";
import HomeLink from "../HomeLink/HomeLink";
import InsertImgLogo from "../../../public/images/InsertImgLogo.png";
import "./TripForm.css";

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
  });

  const { tripId } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tripId) {
      props.handleUpdateTrip(tripId, formData);
      console.log("tripId:", tripId);
    } else {
      props.handleAddTrip(formData);
      console.log("formData: ", formData);
    }

    setFormData({
      destination: "",
      image: "",
      date: "",
      duration: "",
      accomendationBudget: "",
      shoppingBudget: "",
      entertainmentBudget: "",
      emergencyBudget: "",
    });
  };

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(tripId);
      setFormData(tripData);
      console.log("tripData", tripData);
    };
    if (tripId) fetchTrip();
  }, [tripId]);

  const imgPlaceholder = {
    width: "250px",
    height: "250px",
  };

  return (
    <div className="trip-form">
      <div className="header">
        <HomeLink />
        <div className="header-content">
          <h1>{tripId ? "Update Your Trip" : "Create a New Trip"}</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="top-half-form">
          <section className="destination-img">
            <div className="img-field">
              <div className="img-placeholder">
                <img
                  style={imgPlaceholder}
                  src={InsertImgLogo}
                  alt="image placeholder"
                />
              </div>
              <label htmlFor="image-input">Image:</label>
              <input
                type="text"
                name="image"
                id="image-input"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="destination-field">
              <label htmlFor="destination-input">Destination:</label>
              <input
                type="text"
                name="destination"
                id="destination-input"
                value={formData.destination}
                onChange={handleChange}
              />
            </div>
          </section>
          <section className="date-duration">
            <article className="date">
              <label htmlFor="date-input">Date:</label>
              <input
                type="text"
                name="date"
                id="date-input"
                value={formData.date}
                onChange={handleChange}
              />
            </article>
            <article>
              <label htmlFor="duration-input">Duration:</label>
              <input
                type="text"
                name="duration"
                id="duration-input"
                value={formData.duration}
                onChange={handleChange}
              />
            </article>
          </section>
        </div>
        <section className="budget-form">
          <h2>Budget:</h2>
          <article className="budget-categories">
            <div className="accomendation-shopping">
              <div>
                <label htmlFor="accomendationBudget-input">
                  Accomendations Budget:
                </label>
                <input
                  type="number"
                  name="accomendationBudget"
                  id="accomendationBudget-input"
                  value={formData.accomendationBudget}
                  onChange={handleChange}
                />
              </div>
              <div className="shopping">
                <label htmlFor="shoppingBudget-input">Shopping Budget:</label>
                <input
                  type="number"
                  name="shoppingBudget"
                  id="shoppingBudget-input"
                  value={formData.shoppingBudget}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="entertainment-emergency">
              <div className="entertainment">
              <label htmlFor="entertainmentBudget-input">
                Entertainment Budget:
              </label>
              <input
                type="number"
                name="entertainmentBudget"
                id="entertainmentBudget-input"
                value={formData.entertainmentBudget}
                onChange={handleChange}
              />
              </div>
              <div className="emergency">
              <label htmlFor="emergencyBudget-input">Emergency Budget:</label>
              <input
                type="number"
                name="emergencyBudget"
                id="emergencyBudget-input"
                value={formData.emergencyBudget}
                onChange={handleChange}
              />
              </div>
            </div>
          </article>
        </section>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TripForm;
