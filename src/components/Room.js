import React from "react";
import { isEqual } from "date-fns";

import Booking from "./Booking";
import RoomDate from "./RoomDate";

function Room(props) {
  const daysTd = props.dates.map((day, index) => {
    const bookinksToday = props.bookings.filter((singleBook) => {
      const to_date = new Date(singleBook.to_date);

      return isEqual(to_date, day) && singleBook.room_id === props.room.id
        ? true
        : false;
    });

    let bookinksTodayJsx = bookinksToday.map((singleBook) => {
      return <Booking book={singleBook} key={singleBook.id} day={day} />;
    });

    return (
      <RoomDate
        key={index}
        day={day}
        room={props.room}
        cellWidth={props.cellWidth}
        onClick={console.log}
      >
        {bookinksTodayJsx}
      </RoomDate>
    );
  });

  return (
    <tr key={props.room.id}>
      <td className="td-room-title whitespace-nowrap">
        <p className="text-sm">{props.room.title}</p>
        <p className="text-xs">{props.room.category}</p>
      </td>
      {daysTd}
    </tr>
  );
}

export default Room;
