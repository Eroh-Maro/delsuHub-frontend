import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { getImgUrl } from "../utils/getImgUrl";

const EventCard = ({ pic, title, date, description, link }) => {
  return (
    <div className="eventCard">
      <img
        src={getImgUrl(pic)}
        alt={title}
        className="eventImage"
      />

      <div className="eventDetails">
        <h2 className="eventTitle">{title}</h2>
        <p className="eventDate">{date}</p>
        <p className="eventDescription">{description}</p>
        <Link to={link}>
          <button className="registerButton">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
