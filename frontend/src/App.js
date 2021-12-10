import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/Auth";
import EventsPage from "./pages/Events";
import BookingsPage from "./pages/Bookings";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route exact path="/auth" element={<AuthPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          <Route exact path="/bookings" element={<BookingsPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
