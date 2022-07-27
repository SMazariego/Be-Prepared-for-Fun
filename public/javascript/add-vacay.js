async function newVacayFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="vacay-title"]').value;
  const start_date = document.querySelector('input[name="vacay-start"]').value;
  const end_date = document.querySelector('input[name="vacay-end"]').value;
  const destination = document.querySelector(
    'input[name="vacay-destination"]'
  ).value;

  const response = await fetch(`/api/vacays`, {
    method: "POST",
    body: JSON.stringify({
      title,
      start_date,
      end_date,
      destination,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".new-vacay-btn")
  .addEventListener("click", newVacayFormHandler);

