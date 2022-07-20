//todo change coding to target line is deleted or would be the same?

async function deleteItemFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/packing/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/packing/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-packing-item-btn")
  .addEventListener("click", deleteItemFormHandler);
