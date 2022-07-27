function editpagebtn(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  window.location.replace(`/dashboard/edit/${id}`);
}

document.querySelector(".edit-vacay").addEventListener("click", editpagebtn);

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

  window.location.replace(`/dashboard/calendars/${id}`);
}

document.querySelector(".cal-view").addEventListener("click", calpagebtn);
