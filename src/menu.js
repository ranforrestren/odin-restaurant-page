import domManipulator from './domManipulator';
import neapolitan from './neapolitan.jpg';
import hawaiian from './hawaiian.jpg';
import spinach from './spinach.jpg';

const menu = (() => {
    const makePage = function (){
        const _contentBox = document.querySelector('#contentBox');
        _contentBox.replaceChildren();
        domManipulator.addElement('h1', 'menuTitle', _contentBox, "Our Menu:");
        domManipulator.addElement('p', 'pizza1', _contentBox, "Neapolitan Pizza.");
        domManipulator.addElement('img', 'neapolitan', _contentBox, neapolitan);
        domManipulator.addElement('p', 'pizza1', _contentBox, "Hawaiian Pizza.");
        domManipulator.addElement('img', 'hawaiian', _contentBox, hawaiian);
        domManipulator.addElement('p', 'pizza1', _contentBox, "Spinach Pizza.");
        domManipulator.addElement('img', 'spinach', _contentBox, spinach);
    }

    return { makePage };
})();

export default menu;