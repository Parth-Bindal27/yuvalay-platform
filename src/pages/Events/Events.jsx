import "./Events.css";

import EventHero from "../../components/Events/EventHero";
import FeaturedEvent from "../../components/Events/FeaturedEvent";
import UpcomingEvents from "../../components/Events/UpcomingEvents";
import EventCalendar from "../../components/Events/EventCalendar";
import PastEvents from "../../components/Events/PastEvents";
import EventGalleryPreview from "../../components/Events/EventGalleryPreview";
import EventCTA from "../../components/Events/EventCTA";

export default function Events(){

  return(
    <div className="home">
      <EventHero />
      <FeaturedEvent />
      <UpcomingEvents />
      <EventCalendar />
      <PastEvents />
      <EventGalleryPreview />
      <EventCTA />
    </div>

  );
}