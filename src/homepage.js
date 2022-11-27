import domManipulator from './domManipulator';
import chefIcon from './chefIcon.jpg';

const homepage = (() => {
    const makePage = function (){
        const _contentBox = document.querySelector('#contentBox');
        _contentBox.replaceChildren();
        domManipulator.addElement('p', 'tagline', _contentBox, "Your new favorite Italian restaurant.");
        domManipulator.addElement('img', 'chefIcon', _contentBox, chefIcon);
        domManipulator.addElement('p', 'bio', _contentBox, "Head Chef Tohru.");
        domManipulator.addElement('p', 'bio2', _contentBox, "Making pizza since 1978.");
    }

    return { makePage };
})();

export default homepage;