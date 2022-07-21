async function newVacayFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="vacay-title"]').value;
//todo get other consts needed

  const response = await fetch(`/api/vacays`, {
    method: "POST",
    body: JSON.stringify({
      title,
    //todo add other const values here
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

document
  .querySelector(".new-vacay-form")
  .addEventListener("submit", newVacayFormHandler);
