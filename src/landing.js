import waffle from "./img/hero.jpg";

// Landing Page Html
function  loadLanding(){
    // Div to hold content element
    const content = document.getElementById('content');

    // Intro to page elements
    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro');
    content.appendChild(intro);

    // Intro content elements
    const introContent = document.createElement('h2');
    introContent.textContent = 'The restaurant';
    intro.appendChild(introContent);

    // Scroll to next button element
    const downArrow = document.createElement('div');
    downArrow.setAttribute('id', 'downArrow');
    downArrow.setAttribute('class', 'blink');
    downArrow.innerHTML = '<svg fill="#ff983e" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ff983e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path> <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path> </g> </g> </g> </g></svg>';
    content.appendChild(downArrow);

    // top content container element
    const firstContainer = document.createElement('div');
    firstContainer.setAttribute('id', 'firstContainer');
    content.appendChild(firstContainer);

    // Img inside first container
    const fImg = new Image();
    fImg.src = waffle;
    fImg.setAttribute('id', 'waffles');
    fImg.setAttribute('alt', 'Waffle');
    firstContainer.appendChild(fImg);

    // Menu Container Element
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'smallMenu');
    firstContainer.appendChild(menuContainer);

    // Menu Title Container Element
    const menuTitleContainer = document.createElement('div');
    menuTitleContainer.setAttribute('id', 'titleSmallMenu');
    menuTitleContainer.innerHTML = '<h2>Menu</h2><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 470 470" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#66C6FE;" points="40,344.667 40,274.667 80,296.087 80,326.083 "></polygon> <polygon style="fill:#99D9FF;" points="20,326.083 20,296.087 50,274.667 50,344.667 "></polygon> <path style="fill:#3F4C53;" d="M80,326.083V432.5c0,16.57-13.43,30-30,30L40,326.083H80z"></path> <path style="fill:#496A7E;" d="M50,326.083V462.5c-16.57,0-30-13.43-30-30V326.083H50z"></path> <path style="fill:#99D9FF;" d="M20,37.5v-30c55.229,0,100,44.771,100,100v188.587H90L20,37.5z"></path> <path style="fill:#CCECFF;" d="M90,107.5v188.587H20V37.5C58.599,37.5,90,68.902,90,107.5z"></path> <polygon style="fill:#66C6FE;" points="170,344.667 170,274.667 210,296.087 210,326.083 "></polygon> <polygon style="fill:#99D9FF;" points="150,326.083 150,296.087 180,274.667 180,344.667 "></polygon> <polygon style="fill:#66C6FE;" points="322.997,7.503 322.997,296.083 292.997,296.083 262.997,151.793 292.997,7.503 "></polygon> <polygon style="fill:#99D9FF;" points="292.997,7.503 292.997,296.083 262.997,296.083 232.997,151.793 262.997,7.503 "></polygon> <path style="fill:#CCECFF;" d="M179.997,7.503c-16.5,0-30,13.5-30,30v258.58h113V7.503H179.997z"></path> <path style="fill:#3F4C53;" d="M210,326.083V432.5c0,16.57-13.43,30-30,30l-10-136.417H210z"></path> <path style="fill:#496A7E;" d="M180,326.083V462.5c-16.57,0-30-13.43-30-30V326.083H180z"></path> <polygon style="fill:#66C6FE;" points="373,344.667 373,274.667 413,296.087 413,326.083 "></polygon> <polygon style="fill:#99D9FF;" points="353,326.083 353,296.087 383,274.667 383,344.667 "></polygon> <path style="fill:#3F4C53;" d="M413,326.083V432.5c0,16.57-13.43,30-30,30l-10-136.417H413z"></path> <path style="fill:#496A7E;" d="M383,326.083V462.5c-16.57,0-30-13.43-30-30V326.083H383z"></path> <path style="fill:#99D9FF;" d="M449.997,37.5c0,7.29-2.6,13.97-6.92,19.16c4.32,5.2,6.92,11.88,6.92,19.17 c0,7.29-2.6,13.97-6.92,19.17c4.32,5.19,6.92,11.87,6.92,19.16s-2.6,13.97-6.92,19.17c4.32,5.2,6.92,11.88,6.92,19.17 c0,7.29-2.6,13.97-6.92,19.16c4.32,5.2,6.92,11.88,6.92,19.17c0,7.29-2.6,13.97-6.92,19.17c4.32,5.19,6.92,11.87,6.92,19.16 c0,7.29-2.6,13.97-6.92,19.17c4.32,5.2,6.92,11.88,6.92,19.17c0,16.57-13.43,30-30,30H413l-30-145l30-145h6.997 C436.567,7.5,449.997,20.93,449.997,37.5z"></path> <path style="fill:#CCECFF;" d="M413,7.5v290h-60v-260c0-16.5,13.5-30,30-30H413z"></path> <path d="M20,0c-4.142,0-7.5,3.358-7.5,7.5v425c0,20.678,16.823,37.5,37.5,37.5c20.677,0,37.5-16.822,37.5-37.5V303.586H120 c4.142,0,7.5-3.358,7.5-7.5V107.5C127.5,48.224,79.276,0,20,0z M72.5,318.583h-45v-14.997h45V318.583z M50,455 c-12.407,0-22.5-10.093-22.5-22.5v-98.917h45V432.5C72.5,444.907,62.407,455,50,455z M112.5,288.586h-85V15.301 c47.511,3.83,85,43.719,85,92.199V288.586z"></path> <path d="M53.225,37.488c-3.743-1.781-8.215-0.193-9.997,3.546c-1.781,3.74-0.193,8.215,3.546,9.997 C68.477,61.366,82.5,83.532,82.5,107.5v158.586c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V107.5 C97.5,77.779,80.121,50.297,53.225,37.488z"></path> <path d="M323,0H180c-20.678,0-37.5,16.822-37.5,37.5l0,258.519c0,0.022,0,0.045,0,0.067s0,0.045,0,0.067v29.92 c0,0.019,0,106.426,0,106.426c0,20.678,16.822,37.5,37.5,37.5c20.677,0,37.5-16.822,37.5-37.5V303.586H323 c4.142,0,7.5-3.358,7.5-7.5V7.5C330.5,3.358,327.142,0,323,0z M202.5,318.583h-45v-14.997h45V318.583z M180,455 c-12.407,0-22.5-10.093-22.5-22.5v-98.917h45V432.5C202.5,444.907,192.407,455,180,455z M315.5,288.586h-158l0-251.086 c0-12.407,10.093-22.5,22.5-22.5h135.5V288.586z"></path> <path d="M263,273.586c4.142,0,7.5-3.358,7.5-7.5V37.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v228.586 C255.5,270.229,258.858,273.586,263,273.586z"></path> <path d="M413,28.583c-4.142,0-7.5,3.358-7.5,7.5v230c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-230 C420.5,31.941,417.142,28.583,413,28.583z"></path> <path d="M452.229,56.667c3.426-5.766,5.271-12.397,5.271-19.167C457.5,16.822,440.678,0,420,0h-37c-20.678,0-37.5,16.822-37.5,37.5 v395c0,20.678,16.822,37.5,37.5,37.5s37.5-16.822,37.5-37.5V304.997c20.449-0.268,37-16.986,37-37.497 c0-6.769-1.845-13.401-5.271-19.167c3.426-5.766,5.271-12.398,5.271-19.167c0-6.769-1.845-13.401-5.271-19.167 c3.426-5.766,5.271-12.398,5.271-19.167c0-6.769-1.845-13.401-5.271-19.167c3.426-5.766,5.271-12.397,5.271-19.167 s-1.845-13.401-5.271-19.167c3.426-5.766,5.271-12.398,5.271-19.167c0-6.769-1.845-13.401-5.271-19.167 c3.426-5.766,5.271-12.398,5.271-19.167C457.5,69.064,455.655,62.433,452.229,56.667z M405.5,318.583h-45v-13.581l45-0.002V318.583 z M383,455c-12.407,0-22.5-10.093-22.5-22.5v-98.917h45V432.5C405.5,444.907,395.407,455,383,455z M437.31,61.461 c3.347,4.025,5.19,9.129,5.19,14.372c0,5.242-1.843,10.346-5.19,14.372c-2.311,2.779-2.311,6.811,0,9.59 c3.347,4.025,5.19,9.129,5.19,14.372c0,5.243-1.843,10.347-5.19,14.372c-2.311,2.779-2.311,6.811,0,9.59 c3.347,4.025,5.19,9.128,5.19,14.371s-1.843,10.346-5.19,14.371c-2.311,2.779-2.311,6.812,0,9.59 c3.347,4.025,5.19,9.129,5.19,14.372c0,5.242-1.843,10.346-5.19,14.372c-2.311,2.779-2.311,6.811,0,9.59 c3.347,4.025,5.19,9.129,5.19,14.372c0,5.243-1.843,10.347-5.19,14.372c-2.311,2.779-2.311,6.811,0,9.59 c3.347,4.025,5.19,9.128,5.19,14.371c0,12.407-10.093,22.5-22.5,22.5l-59.5,0.003V37.5c0-12.407,10.093-22.5,22.5-22.5h37 c12.407,0,22.5,10.093,22.5,22.5c0,5.243-1.843,10.346-5.19,14.371C434.999,54.65,434.999,58.683,437.31,61.461z"></path> </g> </g></svg>';
    menuContainer.appendChild(menuTitleContainer);

    // Menu List Element
    const menuListContainer = document.createElement('ul');
    menuListContainer.innerHTML = '<li>Sandwich <br> <p id="foodDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li><li>Sandwich <br> <p id="foodDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li><li>Sandwich <br> <p id="foodDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li><li>Sandwich <br> <p id="foodDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li>';
    menuContainer.appendChild(menuListContainer);
    
}

export default loadLanding;