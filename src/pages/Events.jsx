import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import EventCard from '../components/EventCard.jsx';
import { useFetchAllEventsQuery } from '../redux/features/events/events.api';
import { OrbitProgress } from 'react-loading-indicators';

const Events = () => {
  const { data: response = {} } = useFetchAllEventsQuery();
  const events = response.events || [];
    /* when expecting data from a json file, use the following code:
  import { useState, useEffect } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((response) => response.json())
      .then((data) =>  setEvents(data))
  }, []);
}*/ 
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      if (events.length > 0) {
        setIsLoading(false); // Set loading to false after 2 seconds if events are available
      } else {
        setIsLoading(true); // Keep loading if events are not available
      }
    }, 600);
  
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [events]);

  
  return (
    <div>
      <Navbar />
      <div className="eventsContainer" data-aos="fade-up">
        {isLoading ? (
          <div className="loadingContainer">
            <h1 className="loadingText">Loading Events...</h1>
            <OrbitProgress color="#762121" size="medium" text="" textColor="" />
          </div>
        ) : events.length > 0 ? (
          events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              pic={event.coverImage}
              link={event.link}
            />
          ))
        ) : (
          <h1>No events yet</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;