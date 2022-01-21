import React from "react";

function RoomDate(props) {
  const clickHandler = () => {
    props.onClick &&
      props.onClick({
        room: props.room,
        from_date: props.day,
        to_date: props.day,
      });
  };

  return (
    <td
      key={props.day.getTime()}
      style={{ width: props.cellWidth + "px" }}
      onClick={clickHandler}
    >
      {props.children}
    </td>
  );
}
export default RoomDate;
