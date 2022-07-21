//todo figure out how to make work for calendar style
async function agendaFormHandler(event) {
  event.preventDefault();

  const agenda_text = document.querySelector(
    'input[name="agenda-title"]'
  ).value;
  const vacay_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  //todo get other consts needed
  if (agenda_text) {
    const response = await fetch(`/api/agendas`, {
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
      console.log("response ok");
    } else {
      alert(response.statusText);
      console.log("response not ok");
    }
  }
}

document
  .querySelector(".agenda-form")
  .addEventListener("submit", agendaFormHandler);
