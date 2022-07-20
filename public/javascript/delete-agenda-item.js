//todo figure out how to make work for calendar style
async function deleteAgendaFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/agenda/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/agenda/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-agenda-btn")
  .addEventListener("click", deleteAgendaFormHandler);
