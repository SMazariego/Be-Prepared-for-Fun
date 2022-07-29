async function deleteAgendaFormHandler(event) {
  event.preventDefault();
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

document.querySelectorAll(".delete-agenda-btn").forEach((btn) => {
  btn.addEventListener("click", deleteAgendaFormHandler);
});
