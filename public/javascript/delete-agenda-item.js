//todo figure out how to make work for calendar style
async function deleteAgendaFormHandler(event) {
  event.preventDefault();
  console.log("delete started");
  const id = event.target.id;
  console.log(id);
  const response = await fetch(`/api/agendas/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-agenda-btn")
  .addEventListener("click", deleteAgendaFormHandler);
