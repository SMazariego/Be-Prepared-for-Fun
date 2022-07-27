// const { WindowScrollController } = require("fullcalendar");

async function agendaFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="agenda-titleN"]').value;
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const display_date = document.querySelector(
    'input[name="agenda-dateN"]'
  ).value;
  const start_time = document.querySelector(
    'input[name="agenda-startN"]'
  ).value;
  const end_time = document.querySelector('input[name="agenda-endN"]').value;
  const location = document.querySelector(
    'input[name="agenda-locationN"]'
  ).value;
  const agenda_notes = document.querySelector(
    'input[name="agenda-notesN"]'
  ).value;

  // console.log("agenda date" + start);
  // if (title) {
  const response = await fetch(`/api/agendas`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      vacay_id: vacay_id,
      start: `${display_date}T${start_time}`,
      end: `${display_date}T${end_time}`,
      display_date: display_date,
      start_time: start_time,
      end_time: end_time,
      location: location,
      agenda_notes: agenda_notes,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(response);
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
// }

document
  .querySelector("#save-event-btn")
  .addEventListener("click", agendaFormHandler);

// document.window.onload(() => {
//   if (vacays) {
//     window.scrollTo(0, 500);
//   }
// });
