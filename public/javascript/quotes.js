// https://zenquotes.io/api/random?option1=value&option2=value
// Random quote generator api


const api_url = "https://zenquotes.io/api/random";

async function getapi(url) {
  //get a random number to pick one of the quotes
  let c = Math.floor(Math.random() * 30);
  const response = await fetch(url);
  var quoteData = await response.json();
  console.log(quoteData);
  document.getElementById("quoteArea").textContent = quoteData[c].q;
}

getapi(api_url);

////////////////////////////


//! add to footer as attribution
// Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
