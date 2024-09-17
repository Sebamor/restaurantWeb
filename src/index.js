import "./main.css";
import "./landing.js";
import "./raleway.ttf";

// Scroll to next section
(() => {
    const downArrow = document.getElementById('downArrow');
    const firstContainer = document.getElementById('firstContainer');

    downArrow.addEventListener('click', () => {
    firstContainer.scrollIntoView({behavior: 'smooth'})
});
})();