async function agendaFormHandler(event) {
  event.preventDefault();
  // console.log(
  //   "date before" + document.querySelector('input[name="agenda-date"]').value
  // );
  const title = document.querySelector('input[name="agenda-title"]').value;
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const start = document.querySelector('input[name="agenda-date"]').value;
  const startTime = document.querySelector('input[name="agenda-start"]').value;
  const endTime = document.querySelector('input[name="agenda-end"]').value;
  const location = document.querySelector(
    'input[name="agenda-location"]'
  ).value;
  const agenda_notes = document.querySelector(
    'input[name="agenda-notes"]'
  ).value;

  // console.log("agenda date" + start);
  if (title) {
    const response = await fetch(`/api/agendas`, {
      method: "POST",
      body: JSON.stringify({
        title,
        vacay_id,
        start: `${start}T${startTime}`,
        end: `${start}T${endTime}`,
        // display_date: `${start}`,
        // startTime,
        // endTime,
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
  .addEventListener("submit", agendaFormHandler);
