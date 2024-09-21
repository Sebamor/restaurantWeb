// About page HTML
function loadAbout() {
    // Element holding About Content
    const content = document.getElementById('content');

    // Contact Container
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');
    content.appendChild(contactContainer);
    // Contact Element
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contactContainer.appendChild(contact);
    // Contact email/github/linkedin
    const social = document.createElement('p');
    social.textContent = 'test';
    contact.innerHTML = 'hello' + social.textContent;
    
    // Map Container
    const mapContainer = document.createElement('div');
    mapContainer.setAttribute('id', 'mapContainer');
    content.appendChild(mapContainer);
    // Map Element
    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    mapContainer.appendChild(map);
}

export default loadAbout;