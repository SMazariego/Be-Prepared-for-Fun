//todo figure out how to make work for calendar style
async function agendaFormHandler(event) {
  event.preventDefault();

  const agenda_text = document
    .querySelector('textarea[name="agenda-body"]')
    .value.trim();
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (agenda_text) {
    const response = await fetch("/api/agenda", {
      method: "POST",
      body: JSON.stringify({
        vacay_id,
        agenda_text,
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
  .querySelector(".agenda-form")
  .addEventListener("submit", agendaFormHandler);
