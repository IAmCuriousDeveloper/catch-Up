import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>right column</Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
