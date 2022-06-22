// JavaScript for mobile navigation toggle (myFunction)
// This function will toggle a 'responsive' class on the #myTopnav ul
function myFunction() {
    var x = document.getElementById("myTopnav");
    // Ensure the initial class is 'topnav' for this logic to work as written in the snippet
    // In your index.html, it's just 'flex flex-col md:flex-row ...' initially
    // So, we'll adapt it to use classList.contains as in your original, more robust script.js
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

// JavaScript for publisher filter dropdown visibility toggle
var checkList = document.getElementById('list1');
// Toggle 'visible' class when the 'anchor' (dropdown header) is clicked
checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (checkList.classList.contains('visible')) {
        checkList.classList.remove('visible');
    } else {
        checkList.classList.add('visible');
    }
    evt.preventDefault(); // Prevent default link behavior
};

// *** CORRECTED NEWS FILTERING LOGIC ***
const publisherCheckboxes = document.querySelectorAll('#filter-options input[type="checkbox"]');
const newsCards = document.querySelectorAll('.news-card'); // Selects the actual news card divs
const noNewsMessage = document.getElementById('no-news-message');

// Function to filter news cards based on selected publishers
function filterNewsCards() {
    const selectedPublishers = Array.from(publisherCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value.toLowerCase()); // Ensure lowercase for consistent matching

    let visibleCardCount = 0; // Counter for visible news cards

    newsCards.forEach(card => {
        const cardPublisher = card.getAttribute('data-publisher'); // Get publisher from data-publisher attribute

        // If no publishers are selected OR the card's publisher is in the selected list
        if (selectedPublishers.length === 0 || selectedPublishers.includes(cardPublisher)) {
            card.style.display = 'flex'; // Show the card
            visibleCardCount++;
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Show or hide the 'no news found' message based on visible cards
    if (visibleCardCount === 0) {
        noNewsMessage.classList.remove('hidden'); // Make it visible
        // Removed: noNewsMessage.style.display = 'block'; // Rely on Tailwind's 'hidden' class
    } else {
        noNewsMessage.classList.add('hidden'); // Hide it
        // Removed: noNewsMessage.style.display = 'none'; // Rely on Tailwind's 'hidden' class
    }
}

// Add event listeners to each publisher checkbox to trigger filtering on change
publisherCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterNewsCards);
});

// Run the filter once when the page loads, useful if Django pre-checks some boxes
document.addEventListener('DOMContentLoaded', filterNewsCards);

// Optional: Keep the title animation if you want it
var title = "NewsSelect | Where news meets convenience.    ";
var speed = 500;
var position = 0;
function animateTitle() {
    document.title = title.substring(position) + title.substring(0, position);
    position++;
    if (position > title.length) {
        position = 0;
    }
    setTimeout(animateTitle, speed);
}
animateTitle();

// Removed: The 'scroll' event listener that hides the dropdown, as it's generally not desired.
// If you specifically want the dropdown to close on scroll, you can re-add it.