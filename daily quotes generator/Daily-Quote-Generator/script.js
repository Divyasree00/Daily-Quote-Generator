const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let quotesData = [];

// Load quotes from local JSON file
async function loadQuotes() {
  try {
    const response = await fetch("quotes.json");
    quotesData = await response.json();
    getQuote(); // Load a quote on first load
  } catch (error) {
    quoteText.textContent = "Oops! Couldn't load quotes.";
    authorText.textContent = "";
    console.error("Error loading local quotes:", error);
  }
}

// Get a random quote from the loaded data
function getQuote() {
  if (quotesData.length === 0) return;
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const quote = quotesData[randomIndex];
  quoteText.textContent = quote.content;
  authorText.textContent = `- ${quote.author}`;
}

// Event listener
newQuoteBtn.addEventListener("click", getQuote);

// Start the app
loadQuotes();
