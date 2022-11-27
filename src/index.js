import './style.css';
import pizza from './pizza.jpg';
import chefIcon from './chefIcon.jpg';

const domManipulator = (() => {
    const _root = document.querySelector('#content');

    const addElement = function(type, id, parent, content = '') {
        const element = document.createElement(type);
        element.setAttribute('id', id);
        if (type == 'img') 
        {
            element.src = content;
        }
        else
        {
            element.textContent = content;
        }
        parent.appendChild(element);
        return element;
    }

    const initialSetup = function() {
        const _header = addElement('div', 'header', _root);
        addElement('h1', 'mainTitle', _header, 'Taste of Italy');
        const _links = addElement('div', 'links', _header);
        addElement('a', 'home', _links, 'Home');
        addElement('a', 'menu', _links, 'Menu');
        addElement('a', 'contact', _links, 'Contact');
        const _mainContent = addElement('div', 'mainContent', _root);
        const _contentBox = addElement('div', 'contentBox', _mainContent);
        addElement('p', 'tagline', _contentBox, "Your new favorite Italian restaurant.");
        addElement('img', 'chefIcon', _contentBox, chefIcon);
        addElement('p', 'bio', _contentBox, "Making pizza since 1978.");
        addElement('div', 'footer', _root, "Made by Ran Ren");
        addElement('img', 'background', _root, pizza);
    }
    return { addElement, initialSetup };
})();

domManipulator.initialSetup();