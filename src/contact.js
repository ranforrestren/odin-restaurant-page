import domManipulator from './domManipulator';

const contact = (() => {
    const makePage = function (){
        const _contentBox = document.querySelector('#contentBox');
        _contentBox.replaceChildren();
        domManipulator.addElement('h1', 'contactTitle', _contentBox, "Contact:");
        domManipulator.addElement('p', 'phone', _contentBox, "Phone: +1-123-456-7890.");
        domManipulator.addElement('p', 'location', _contentBox, "Location: 1234 Imaginary Plaza.");
        const _githubLink = domManipulator.addElement('a', 'github', _contentBox, "My Github");
        domManipulator.addTarget(_githubLink, "https://github.com/ranforrestren");
    }

    return { makePage };
})();

export default contact;