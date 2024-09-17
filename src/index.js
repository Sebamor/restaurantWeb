import "./main.css";
import "./raleway.ttf";
import loadLanding from "./landing.js";

loadLanding();

function resetPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

(() => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');

    home.addEventListener('click', () => {
        resetPage();
    })

    about.addEventListener('click', () => {
        resetPage();
    })
})();