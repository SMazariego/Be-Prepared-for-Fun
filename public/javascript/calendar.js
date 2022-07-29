// const FullCalendar = require("fullcalendar");

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  fetch(`/api/vacays/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(async (vacay) => {
      // console.log(vacay);
      const start_day = await vacay.start_date;
      const response = await fetch(`/api/calendars/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response);

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "timeGridWeek",
        events: response,
        initialDate: start_day,
      });
      calendar.render();
    });
});
