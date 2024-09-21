import "./main.css";
import "./about.css";
import "./landing.css";
import loadLanding from "./landing.js";
import loadAbout from "./about.js";

loadLanding();

function resetPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

(() => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    // Clear content and load Home page
    home.addEventListener('click', () => {
        resetPage();
        loadLanding();
        home.style.color = "#ff983e";
        about.style.color = "#fff";
    })
    // Clear Content and load About page
    about.addEventListener('click', () => {
        resetPage();
        loadAbout();
        about.style.color = "#ff983e";
        home.style.color = "#fff";

        // Initialize the map
    var map = L.map('map').setView([48.8588443, 2.2943506], 13);

    // Add OSM tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([48.8588443, 2.2943506]).addTo(map);
    marker.bindPopup('Eiffel Tower').openPopup();
    })
})();