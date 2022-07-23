//todo figure out how to make work for calendar style
async function deleteAgendaFormHandler(event) {
  event.preventDefault();
  const id = event.target.id;

  //todo figure out how to target id of agenda-item selected
  console.log(id);
  const response = await fetch(`/api/agendas/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
    const eventItem = await fetch(`/calendars/${id}`, {
      method: "DELETE",
    });

    if (eventItem.ok) {
      document.location.reload();
    } else {
      alert(eventItem.statusText);
    }
}

document
  .querySelector(".delete-agenda-btn")
  .addEventListener("click", deleteAgendaFormHandler);
