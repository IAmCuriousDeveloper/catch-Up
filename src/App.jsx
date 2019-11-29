import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./EventDashboard";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
