import React, { Component } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import Room from "./Room";
import CalendarContext from "./CalendarContext";

import "./../assets/styles/style.css";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: this.props.rooms,
      bookings: this.props.bookings,
      dates: [],
      cellWith: 40,
      viewStartDate: this.props.viewStartDate ? this.props.viewStartDate : null,
    };
  }

  componentDidMount() {
    this.fillupDates();
  }

  fillupDates() {
    let day = new Date();
    if (this.state.viewStartDate != null) {
      day = new Date(this.state.viewStartDate);
    }
    this.state.dates.push(new Date(day.setDate(day.getDate())));
    for (let aa = 0; aa < 30; aa++) {
      let newDay = new Date(day.setDate(day.getDate() + 1));
      this.state.dates.push(newDay);
    }

    this.setState((oldState) => {
      return this.state;
    });
  }

  renderHeaderDate() {
    let datesHtml = this.state.dates.map((date) => {
      // @todo move it to common helper
      Date.locale = {
        en: {
          month_names: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ],
          month_names_short: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
      };

      return (
        <th key={date.getTime()}>
          <span className="r-calendar-head-date">{date.getDate()}</span>
          <div className="r-calendar-head-month">
            {Date.locale.en.month_names_short[date.getMonth()]}
          </div>
        </th>
      );
    });

    return (
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="text-center text-xs">UHs / Mês</div>
          </th>
          {datesHtml}
        </tr>
      </thead>
    );
  }

  renderRooms(room) {
    return (
      <Room
        key={room.id}
        room={room}
        bookings={this.state.bookings}
        dates={this.state.dates}
        cellWith={this.state.cellWith}
      />
    );
  }

  renderTableBody() {
    let body = this.state.rooms.map((room) => {
      return this.renderRooms(room);
    });

    return <tbody className="bg-white divide-y divide-gray-200">{body}</tbody>;
  }

  render() {
    let head = this.renderHeaderDate();
    let body = this.renderTableBody();

    const contextValue = {
      data: this.state,
    };

    if (this.props.bookingDataCallback) {
      this.props.bookingDataCallback(this.state.bookings);
    }

    return (
      <CalendarContext.Provider value={contextValue}>
        <div className="font-sans r-calendar">
          <ScrollContainer className="scroll-container" ignoreElements="td">
            <table className="min-w-full divide-y divide-gray-200 r-calendar-main-table">
              {head}
              {body}
            </table>
          </ScrollContainer>
        </div>
      </CalendarContext.Provider>
    );
  }
}

export default Calender;
