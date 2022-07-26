//S: front end javascript for deleting a packing item. will be very similar to delete agenda items

// async function called when the delete button is clicked
async function deletePackingHandler(event) {
  event.preventDefault();
  //   get the id from the button so it tells the system which packing item to remove
  const id = event.target.id;
  //get a response by await fetching the packingItems Delete method
  const response = await fetch(`/api/packingItems/${id}`, {
    method: "DELETE",
  });
  //if that response works then document.location.replace("/packing/") to refresh the packing list the user is seeing
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

//addevent listener for delete button
document
  .querySelector(".delete-packing-btn")
  .addEventListener("click", deletePackingHandler);
