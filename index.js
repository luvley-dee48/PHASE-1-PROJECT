// document.addEventListener('DOMContentLoaded', ()=> {
//     const displayQuoteBtn = document.getElementById('display-quote')
//     const quoteContainer = document.getElementById('quote-container')

   
// })
document.addEventListener('DOMContentLoaded', function () {
    const displayQuoteButton = document.getElementById('display-quote');
    const quoteContainer = document.getElementById('quote-container');

    displayQuoteButton.addEventListener('click', function () {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes')
            .then(response => response.json())
            .then(data => {
                const quote = data[0].quote;
                const author = data[0].author;

                // Update the quote displayed on the webpage
                quoteContainer.innerHTML = `<p>"${quote}" - ${author}</p>`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteContainer.innerHTML = '<p>Failed to fetch quote. Please try again later.</p>';
            });
    });
    // const downloadButton = document.getElementById('download-btn');
    // downloadButton.addEventListener('click', function () {
    //     alert('Downloading quote...');
    // });
    // const favoriteButton = document.getElementById('favorite-btn');
    // favoriteButton.addEventListener('click', function () {
    //     alert('Added to favorites!');
    // });
    // const shareButton = document.getElementById('share-btn');
    // shareButton.addEventListener('click', function() {
    //     alert('sharing quote...')
    // });
});
