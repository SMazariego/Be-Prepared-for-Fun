// const FullCalendar = require("fullcalendar");

// async function calendarFormHandler(event) {
//   event.preventDefault();
//   console.log("running cal" + JSON.stringify(event));
//   console.log(document.querySelector(".calendar").id);
//   const id = document.querySelector(".calendar").id;
//   const response = await fetch(`/api/vacays/${id}`, {
//     method: "GET",
//     where: {
//       vacay_id: id,
//     },
//     // body: JSON.stringify({
//     //   agenda_title,
//     //   vacay_id,
//     //   agenda_date,
//     //   agenda_start,
//     //   agenda_end,
//     //   location,
//     //   agenda_notes,
//     // }),
//     //todo how do I say here that the json returned is the events array to use in calendar render?
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     console.log(JSON.stringify(res));
//     const events = res.body.vacay.events;
//     console.log(events);
//     var calendarEl = document.getElementById("calendar");
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: "timeGridWeek",
//       //todo make this the trip dates
//       initialDate: "2022-04-07",
//       headerToolbar: {
//         left: "prev,next today",
//         center: "title",
//         right: "dayGridMonth,timeGridWeek,timeGridDay",
//       },
//       events,
//     });

//     calendar.render();
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelector(".calendar")
//   .addEventListener("click", calendarFormHandler);

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
  });
  calendar.render();
});
