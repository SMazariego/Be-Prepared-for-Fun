async function editEventHandler(event) {
  event.preventDefault();
  const id = event.target.id;
  const title = document.querySelector(`input[name="agenda-title${id}"]`).value;
  const display_date = document.querySelector(
    `input[name="agenda-date${id}"]`
  ).value;
  const start_time = document.querySelector(
    `input[name="agenda-start${id}"]`
  ).value;
  const end_time = document.querySelector(
    `input[name="agenda-end${id}"]`
  ).value;
  const location = document.querySelector(
    `input[name="agenda-location${id}"]`
  ).value;
  const agenda_notes = document.querySelector(
    `input[name="agenda-notes${id}"]`
  ).value;
  if (title) {
    const response = await fetch(`/api/agendas/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
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
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelectorAll(".update-agenda-btn").forEach((btn) => {
  btn.addEventListener("click", editEventHandler);
});
