document.addEventListener("DOMContentLoaded", function () {
  const displayQuoteButton = document.getElementById("display-quote");
  const quoteContainer = document.getElementById("quote-container");
  const likeButton = document.getElementById("like-button");
  let likeCount = 0; // the variable that will store the number of likes

  // added an event listener to the "display quote" button
  displayQuoteButton.addEventListener("click", function () {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((response) => response.json()) // will be able to parse the response as JSON
      .then((data) => {
        const quote = data[0].quote;
        const author = data[0].author;

        // then Update the dsplayed quote in the browser
        quoteContainer.innerHTML = `<p>"${quote}" - ${author}</p>`;
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        quoteContainer.innerHTML =
          "<p>Failed to fetch quote. Please try again later.</p>";
      });
  });
  // added a click event listener to the "like" button
  likeButton.addEventListener("click", function () {
    likeCount++;

    document.getElementById("like-count").textContent = likeCount;
  });
  // the download button
  const downloadButton = document.getElementById("download-btn");
  downloadButton.addEventListener("click", function () {
    const quoteText = quoteContainer.innerText;
    downloadQuote(quoteText);
  });
  //   the function that will be able to download quote and be able to appear as a file
  function downloadQuote(quote) {
    const blob = new Blob([quote], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quote.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  //   a share button
  const shareButton = document.getElementById("share-btn");
  //   added an event listener to the shared button and used if else
  shareButton.addEventListener("click", function () {
    if (navigator.share) {
      navigator
        .share({
          title: "Breaking Bad Quote",
          text: quoteContainer.innerText,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Share functionality is not supported in this browser");
    }
  });
});
