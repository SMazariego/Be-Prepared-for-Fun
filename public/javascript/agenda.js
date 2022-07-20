function addAgendaHandler() {
  document.getElementById("quoteArea").textContent =
    "Quote will populate from external api here";
}

document.querySelector(".add-agenda-btn").addEventListener("click", addAgendaHandler);