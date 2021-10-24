'use strict';
class DomElement {
    constructor() {
        this.selector;
        this.height;
        this.width;
        this.bg;
        this.fontSize;
    }
    createdElement(selector) {
        if (selector[0] === '.') {
            let list = document.getElementById('list');
            
            selector = selector.substring(1);
            const newElement = document.createElement('div');
            newElement.classList.add(selector);
            newElement.textContent = selector;
            list.append(newElement);
            console.log(newElement);
            newElement.style.cssText = 'height: 60px; width: 500px; background: red; font-size: 24px;'
        } else if (selector[0] === '#') {
            let list = document.getElementById('list');
            
            selector = selector.substring(1);
            const newElement = document.createElement('div');
            newElement.setAttribute('id', selector);
            newElement.textContent = selector;
            list.append(newElement);
            console.log(newElement);
            newElement.style.cssText = 'height: 60px; width: 500px; background: red; font-size: 24px;'
        }
        
    }
}
const newObject = new DomElement();
newObject.createdElement('.block');
newObject.createdElement('#best');
newObject.createdElement('.best');
newObject.createdElement('#block');
newObject.createdElement('.new_block');
newObject.createdElement('#new_best');


