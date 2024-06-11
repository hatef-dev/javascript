const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const qutoeBtn = document.getElementById("new-quote");
let data = null;
async function getData() {
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist&type=single";
  try {
    const response = await fetch(apiUrl);
    data = await response.json();
    quoteAuthor.textContent = "Hatef Sanati"
    if (data.joke.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = data.joke;
    // getNewQuote()
  } catch (error) {
    console.log(error);
  }
}
const tweetQuote = function() {
  const twitterURl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}`
  window.open(twitterURl, '_blank')
}
qutoeBtn.addEventListener('click', getData)
twitterBtn.addEventListener('click', tweetQuote)
getData();

