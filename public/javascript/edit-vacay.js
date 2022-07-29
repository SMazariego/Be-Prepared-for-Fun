async function editVacayFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('input[name="vacay-title"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const start_date = document.querySelector('input[name="vacay-start"]').value;
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
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-vacay-btn")
  .addEventListener("click", editVacayFormHandler);

function packpagebtn(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  window.location.replace(`/dashboard/packing/${id}`);
}

document.querySelector(".packing-list").addEventListener("click", packpagebtn);

function calpagebtn(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  window.location.replace(`/dashboard/calendar/${id}`);
}

document.querySelector("#cal-view").addEventListener("click", calpagebtn);
