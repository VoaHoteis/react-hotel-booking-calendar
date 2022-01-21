import React from "react";
import { isBefore } from "date-fns";

function Booking(props) {
  const bgColor = () => {
    let h =
      (new Date(props.book.from_date).getTime() * 21 * props.book.room_id) %
      255;
    return "hsla(" + h + ", 29%, 60%, 1)";
  };

  let number_of_days =
    (new Date(props.book.to_date).getTime() -
      new Date(props.book.from_date).getTime()) /
    (60 * 60 * 24 * 1000);

  if (number_of_days > 0) {
    let style = {
      width: `${number_of_days * 100}%`,
      marginLeft: `-${number_of_days * 100}%`,
      backgroundColor: bgColor(),
    };

    let fromDateIsPastToday = false;

    if (isBefore(new Date(props.book.from_date), new Date())) {
      fromDateIsPastToday = true;
    }

    return (
      <div
        onClick={(event) => {
          props.onClick && props.onClick(props.book);
          event.stopPropagation();
          event.preventDefault();
        }}
        className={`booking text-sm ${
          fromDateIsPastToday ? "from-date-is-past-today" : ""
        }`}
        style={style}
      >
        {props.book.guest_name}
      </div>
    );
  } else {
    return <></>;
  }
}

export default Booking;
