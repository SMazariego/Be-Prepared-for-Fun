// const FullCalendar = require("fullcalendar");

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  fetch(`/api/vacays/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(async (vacay) => {
      const start_day = await vacay.start_date;
      const response = await fetch(`/api/packingItems/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response);

      const packingList = new FullCalendar.Calendar(calendarEl, {
        initialView: "timeGridWeek",
        events: response,
        initialDate: start_day,
      });
      packingList.render();
    });
});

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
