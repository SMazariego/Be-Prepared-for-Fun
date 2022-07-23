async function calendarFormHandler(event) {
  event.preventDefault();

  await fetch(`/api/vacays/${id}`, {
    method: "GET",
    body,
    //todo how do I say here that the json returned is the events array to use in calendar render?
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function () {
    const events = res.body.vacay.events;
    console.log(events);
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridWeek",
      //todo make this the trip dates
      initialDate: "2022-04-07",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events,
    });

    calendar.render();
  });
}

document
  .querySelector(".calendar")
  .addEventListener("click", calendarFormHandler);
