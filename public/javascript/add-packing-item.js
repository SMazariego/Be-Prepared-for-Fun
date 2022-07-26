//S: front end javascript for adding a new packing item. will be very similar to add agenda items but the only fields needed will packing_text

//async function that will be called by the add button getting clicked
async function packingFormHandler(event) {
  event.preventDefault();
  //pull in value from the input line for the packing item text
  const packing_text = document.querySelector(
    'input[name="packing-text"]'
  ).value;
  // if there is something in the input line above then get a response by await fetching the packingItems post method
  if (packing_text) {
    const response = await fetch(`/api/packingItems`, {
      method: "POST",
      body: JSON.stringify({
        packing_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if that response works then document.location.reload to refresh the packing list the user is seeing
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//add event listener for add button to run function
document
  .getElementById("save-packing-btn")
  .addEventListener("submit", packingFormHandler);
