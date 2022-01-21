import React from "react";

import "./App.css";
import Calender from "./components/Calender";
import bookingData from "./data/bookings";
import roomData from "./data/rooms";
import BookingHelper from "./helpers/BookingHelper";

function App() {
  let viewStartDate = BookingHelper.formatDate(new Date());

  let dataCallback = (data) => {
    console.log("Exported Booking Data :: ", data);
  };

  return (
    <Calender
      rooms={roomData}
      bookings={bookingData}
      bookingDataCallback={dataCallback}
      viewStartDate={viewStartDate}
    />
  );
}

export default App;
