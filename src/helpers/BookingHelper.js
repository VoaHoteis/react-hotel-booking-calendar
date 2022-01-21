/**
 * Unique key generator
 */
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + "-" + s4() + "-" + s4();
};
/**
 * Format in yyyy-mm-dd format
 * @param {*} date
 */
const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

/**
 * Generates dates from start to number of days
 * @param {*} startDate
 * @param {*} numberOfDays
 */
const generateDates = (startDate, numberOfDays) => {
  let from_date = new Date(startDate);
  let dates = [];

  dates.push(from_date.toDateString());
  for (var aa = 0; aa < numberOfDays - 1; aa++) {
    from_date.setDate(from_date.getDate() + 1);
    dates.push(from_date.toDateString());
  }
  return dates;
};

/**
 * Return All booking dates for the given booking
 **/
export const getAllBookingDates = (singleBooking) => {
  let from_date = new Date(singleBooking.from_date);
  let numberOfDays = numberOfDaysOfBooking(singleBooking);
  return generateDates(from_date, numberOfDays);
};

/**
 * Get number of days of booking
 * @param {*} booking
 */
export const numberOfDaysOfBooking = (booking) => {
  return (
    (new Date(booking.to_date).getTime() -
      new Date(booking.from_date).getTime()) /
      (60 * 60 * 24 * 1000) +
    1
  );
};

export default {
  getAllBookingDates: getAllBookingDates,
  guid: guid,
  formatDate: formatDate,
};
