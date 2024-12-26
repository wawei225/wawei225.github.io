const header = document.querySelector('.main-header');
const scrollToTopButton = document.createElement('div'); // Create the scroll-to-top button
scrollToTopButton.id = 'scroll-to-top';
scrollToTopButton.innerHTML = '&#8593;'; // Add an upward arrow symbol
document.body.appendChild(scrollToTopButton); // Add the button to the document

let lastScrollY = window.scrollY;

// Function to show or hide the header and scroll-to-top button
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Show or hide the header based on scroll direction
    if (currentScrollY > lastScrollY) {
        header.classList.add('hidden'); // Hide the header
    } else {
        header.classList.remove('hidden'); // Show the header
    }

    // Show or hide the scroll-to-top button based on scroll position
    if (currentScrollY > 100) { // Show button after scrolling 100px
        scrollToTopButton.style.display = 'block';
        scrollToTopButton.style.opacity = '1';
    } else { // Hide the button when at the top
        scrollToTopButton.style.opacity = '0';
        setTimeout(() => {
            scrollToTopButton.style.display = 'none';
        }, 300); // Wait for transition before hiding
    }

    lastScrollY = currentScrollY; // Update the scroll position
});

// Functionality to scroll to the top smoothly when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
});

// Function to dynamically adjust the font size of project titles
function adjustFontSizeForProjectTitles() {
    const titles = document.querySelectorAll('.project-title'); // Select all project titles

    titles.forEach((title) => {
        const projectBox = title.parentElement; // Parent project box
        const computedStyles = window.getComputedStyle(projectBox);

        // Calculate the usable width inside the project box
        const boxWidth = projectBox.offsetWidth;
        const paddingLeft = parseFloat(computedStyles.paddingLeft);
        const paddingRight = parseFloat(computedStyles.paddingRight);
        const usableWidth = boxWidth - paddingLeft - paddingRight;

        let fontSize = parseInt(window.getComputedStyle(title).fontSize, 10); // Get the current font size

        // Reset the font size to its default value before checking for overflow
        title.style.fontSize = "2rem";

        // Reduce the font size until the title fits within the usable width
        while (title.scrollWidth > usableWidth && fontSize > 10) { // Stop reducing at 10px
            fontSize--; // Decrease font size
            title.style.fontSize = `${fontSize}px`;
        }
    });
}

// Run the function on page load and window resize
window.addEventListener('load', adjustFontSizeForProjectTitles);
window.addEventListener('resize', adjustFontSizeForProjectTitles);

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".side-by-side");

    rows.forEach(row => {
        const images = row.querySelectorAll("img");
        let minHeight = Infinity;

        // Find the smallest height among the images in the row
        images.forEach(img => {
            const imgHeight = img.naturalHeight / img.naturalWidth * img.offsetWidth;
            if (imgHeight < minHeight) {
                minHeight = imgHeight;
            }
        });

        // Apply the minimum height to all images in the row
        images.forEach(img => {
            img.style.height = `${minHeight}px`;
        });
    });
});















