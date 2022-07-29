//S: front end javascript for updating an existing packing item. will be very similar to edit agenda items but the only fields needed will be id and packing_text
//async function called when edit button is clicked (could make it when text box is changed, but I'd have to look into that to figure out how to do that with handlebars)
async function editPackingHandler(event) {
  event.preventDefault();
  //   get the id from the button so it tells the system which packing item to remove
  const id = event.target.id;
  console.log(id);
  //pull in value from the input line for the packing item text
  const new_packing_text = document.querySelector(
    `input[name="packing-text${id}"]`
  ).value;
  // if there is something in the input line above then get a response by await fetching the packingItems put method
  if (new_packing_text) {
    const response = await fetch(`/api/packingItems/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        packing_text: new_packing_text,
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
document.querySelectorAll(".update-packing-btn").forEach((btn) => {
  btn.addEventListener("click", editPackingHandler);
});
