const { WindowScrollController } = require("fullcalendar");

async function agendaFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="agenda-title1"]').value;
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const display_date = document.querySelector(
    'input[name="agenda-date1"]'
  ).value;
  const start_time = document.querySelector(
    'input[name="agenda-start1"]'
  ).value;
  const end_time = document.querySelector('input[name="agenda-end1"]').value;
  const location = document.querySelector(
    'input[name="agenda-location1"]'
  ).value;
  const agenda_notes = document.querySelector(
    'input[name="agenda-notes1"]'
  ).value;

  // console.log("agenda date" + start);
  if (title) {
    const response = await fetch(`/api/agendas`, {
      method: "POST",
      body: JSON.stringify({
        title,
        vacay_id,
        start: `${display_date}T${start_time}`,
        end: `${display_date}T${end_time}`,
        display_date,
        start_time,
        end_time,
        location,
        agenda_notes,
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
}

document
  .querySelector(".agenda-form")
  .addEventListener("click", agendaFormHandler);

// document.window.onload(() => {
//   if (vacays) {
//     window.scrollTo(0, 500);
//   }
// });
