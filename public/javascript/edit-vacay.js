async function editVacayFormHandler(event) {
  event.preventDefault();

  //todo add other consts here and to body section in response
  const title = document.querySelector('input[name="vacay-title"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/vacay/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-vacay-form")
  .addEventListener("submit", editVacayFormHandler);
