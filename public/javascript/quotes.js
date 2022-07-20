// https://zenquotes.io/api/random?option1=value&option2=value
// Random quote generator api

// function test() {
// document.getElementById("quoteArea").textContent = "Quote will populate from external api here"
// }

// test()




const apiURL =
  "https://zenquotes.io/api/quotes";

//todo need to fix cors error
async function getapi(url) {
  //get a random number to pick one of the quotes
//   let c = Math.floor(Math.random() * 30);
  const response = await fetch(url);
  var quoteData = await response.json();
  console.log(quoteData);
//   document.getElementById("quoteArea").textContent = quoteData[c].q;
}

getapi(apiURL);


////////////////////////////

//! add to footer as attribution
// Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
