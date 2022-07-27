
async function editEventHandler(event) {
  event.preventDefault();
  const id = event.target.id;
  const title = document.querySelector('input[name="agenda-title"]').value;
  const display_date = document.querySelector(
    'input[name="agenda-date"]'
  ).value;
  const start_time = document.querySelector('input[name="agenda-start"]').value;
  const end_time = document.querySelector('input[name="agenda-end"]').value;
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
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".update-agenda-btn")
  .addEventListener("click", editEventHandler);
