//todo figure out how to make work for calendar style
async function editEventHandler(event) {
  event.preventDefault();
  const id = event.target.id;
  const title = document.querySelector(
    'input[name="agenda-title"]'
  ).value;
  const start = document.querySelector('input[name="agenda-date"]').value;
  const startTime = document.querySelector(
    'input[name="agenda-start"]'
  ).value;
  const endTime = document.querySelector('input[name="agenda-end"]').value;
  const location = document.querySelector(
    'input[name="agenda-location"]'
  ).value;
  const agenda_notes = document.querySelector(
    'input[name="agenda-notes"]'
  ).value;
  if (title) {
    const response = await fetch(`/api/agendas/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        start,
        startTime,
        endTime,
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
  }
}
document
  .querySelector(".update-agenda-btn")
  .addEventListener("click", editEventHandler);
