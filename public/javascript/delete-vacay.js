async function deleteVacayFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/vacacy/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-vacay-btn")
  .addEventListener("click", deleteVacayFormHandler);
