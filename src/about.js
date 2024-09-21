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
    // Contact email/github/linkedin name
    const email = document.createElement('span');
    email.textContent = "sebamor1995@gmail.com"
    const github = document.createElement('span');
    github.textContent = "https://github.com/Sebamor";
    const linkedIn = document.createElement('span');
    linkedIn.textContent = "https://www.linkedin.com/in/sebastian-amor-b7b7712b9";
    // Contact whole strings
    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = "Email: " + email.textContent;
    contact.appendChild(contactEmail)
    const contactGithub = document.createElement('p');
    contactGithub.innerHTML = "Github: " + github.textContent;
    contact.appendChild(contactGithub);
    const contactLinkedIn = document.createElement('p');
    contactLinkedIn.innerHTML = "LinkedIn: " + linkedIn.textContent;
    contact.appendChild(contactLinkedIn);

    
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