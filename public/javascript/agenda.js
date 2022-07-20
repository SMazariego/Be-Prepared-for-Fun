function test() {
  document.getElementById("quoteArea").textContent =
    "Quote will populate from external api here";
}

document.querySelector(".update-agenda-btn").addEventListener("click", test);