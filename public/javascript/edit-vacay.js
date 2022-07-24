async function editVacayFormHandler(event) {
  event.preventDefault();
  console.log(document.getElementById("2").value);
  const title = document
    .querySelector('input[name="vacay-title"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const start_date = document.querySelector('input[name="vacay-start"]').value;
  console.log(start_date);
  const end_date = document.querySelector('input[name="vacay-end"]').value;
  const destination = document.querySelector(
    'input[name="vacay-destination"]'
  ).value;

  const response = await fetch(`/api/vacays/${id}`, {
    method: "PUT",
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
    console.log(response);
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-vacay-form")
  .addEventListener("submit", editVacayFormHandler);
