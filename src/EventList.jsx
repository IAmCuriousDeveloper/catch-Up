import React, { Component } from "react";
import EventListItem from "./EventListItem";
class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {events.map(event => {
          return <EventListItem event={event} key={event.id} />;
        })}
      </div>
    );
  }
}
export default EventList;
