import pizza from './pizza.jpg';
import chefIcon from './chefIcon.jpg';
import homepage from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';

const domManipulator = (() => {
    const _root = document.querySelector('#content');
    
    const addElement = function(type, id, parent, content = '') {
        const element = document.createElement(type);
        element.setAttribute('id', id);
        if (type == 'img') {
            element.src = content;
        }
        else {
            element.textContent = content;
        }
        parent.appendChild(element);
        return element;
    }

    const addListener = function(target, event) {
        target.addEventListener("click", event);
    }

    const addTarget = function(target, link) {
        target.setAttribute('href', link);
        target.setAttribute('target', "_blank");
    }

    const initialSetup = function() {
        const _header = addElement('div', 'header', _root);
        addElement('h1', 'mainTitle', _header, 'Taste of Italy');
        const _links = addElement('div', 'links', _header);
        const _homeButton = addElement('a', 'home', _links, 'Home');
        addListener(_homeButton, homepage.makePage);
        const _menuButton = addElement('a', 'menu', _links, 'Menu');
        addListener(_menuButton, menu.makePage);
        const _contactButton = addElement('a', 'contact', _links, 'Contact');
        addListener(_contactButton, contact.makePage);
        const _mainContent = addElement('div', 'mainContent', _root);
        const _contentBox = addElement('div', 'contentBox', _mainContent);
        addElement('p', 'tagline', _contentBox, "Your new favorite Italian restaurant.");
        addElement('img', 'chefIcon', _contentBox, chefIcon);
        addElement('p', 'bio', _contentBox, "Head Chef Tohru.");
        addElement('p', 'bio2', _contentBox, "Making pizza since 1978.");
        addElement('div', 'footer', _root, "Made by Ran Ren");
        addElement('img', 'background', _root, pizza);
    }

    return { addElement, addTarget, initialSetup };
})();

export default domManipulator;