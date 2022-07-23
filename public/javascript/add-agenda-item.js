//todo figure out how to make work for calendar style
async function agendaFormHandler(event) {
  event.preventDefault();

  const agenda_title = document.querySelector(
    'input[name="agenda-title"]'
  ).value;
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const agenda_date = document.querySelector(
    'input[name="agenda-title"]'
  ).value;
  const agenda_start = document.querySelector(
    'input[name="agenda-start"]'
  ).value;
  const agenda_end = document.querySelector('input[name="agenda-end"]').value;
  const location = document.querySelector(
    'input[name="agenda-location"]'
  ).value;
  const agenda_notes = document.querySelector(
    'input[name="agenda-notes"]'
  ).value;
  const title = agenda_title;
  const start = agenda_date;
  const startTime = agenda_start;
  const endTime = agenda_end;
  const description = agenda_notes;
  if (agenda_title) {
    const response = await fetch(`/api/agendas`, {
      method: "POST",
      body: JSON.stringify({
        agenda_title,
        vacay_id,
        agenda_date,
        agenda_start,
        agenda_end,
        location,
        agenda_notes,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
    const createEvent = await fetch(`/api/events`, {
      method: "POST",
      body: JSON.stringify({
        title,
        vacay_id,
        start,
        startTime,
        endTime,
        location,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (createEvent.ok) {
      document.location.reload();
    } else {
      alert(createEvent.statusText);
    }
  }
}

document
  .querySelector(".agenda-form")
  .addEventListener("submit", agendaFormHandler);
