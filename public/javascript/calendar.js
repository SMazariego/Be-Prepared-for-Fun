// const FullCalendar = require("fullcalendar");

document.addEventListener("DOMContentLoaded", async function () {
  const calendarEl = document.getElementById("calendar");
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/calendars/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    events: response,
  });
  calendar.render();
});
