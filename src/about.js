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
    email.innerHTML = '<a href="mailto:sebamor1995@gmail.com">Sebamor1995@gmail.com</a>';
    const github = document.createElement('span');
    github.innerHTML = '<a href="https://github.com/Sebamor">Sebamor</a>';
    const linkedIn = document.createElement('span');
    linkedIn.innerHTML = '<a href="https://www.linkedin.com/in/sebastian-amor-b7b7712b9">Sebastian Amor</a>';
    // Contact whole strings
    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = "Email: ";
    contactEmail.appendChild(email);
    contact.appendChild(contactEmail)
    const contactGithub = document.createElement('p');
    contactGithub.innerHTML = "Github: ";
    contactGithub.appendChild(github);
    contact.appendChild(contactGithub);
    const contactLinkedIn = document.createElement('p');
    contactLinkedIn.innerHTML = "LinkedIn: ";
    contactLinkedIn.appendChild(linkedIn);
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