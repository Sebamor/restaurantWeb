import "./main.css";
import "./landing.js";
import "./raleway.ttf";
import loadLanding from "./landing.js";

loadLanding();

// Scroll to next section
(() => {
    const downArrow = document.getElementById('downArrow');
    const firstContainer = document.getElementById('firstContainer');

    downArrow.addEventListener('click', () => {
    firstContainer.scrollIntoView({behavior: 'smooth'})
});
})();