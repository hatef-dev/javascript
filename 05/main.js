const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const qutoeBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader')


const loading = function() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
const complete = function() {
  loader.hidden= true ;
  quoteContainer.hidden = false;
}

async function getData() {
  loading();
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist&type=single";
  try {
    loading()
    const response = await fetch(apiUrl);
    let data = await response.json();
    quoteAuthor.textContent = "Hatef Sanati";
    if (data.joke.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = data.joke;
    // getNewQuote()
  complete()
  } catch (error) {
    console.log(error);
  }
}
const tweetQuote = function () {
  const twitterURl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}`;
  window.open(twitterURl, "_blank");
};
qutoeBtn.addEventListener("click", getData);
twitterBtn.addEventListener("click", tweetQuote);
getData();
