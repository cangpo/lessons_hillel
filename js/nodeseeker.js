window.onload = () =>{

    const appButtons = document.getElementById('app-buttons');
    const appButtonsLength = appButtons.children.length;
    const input = document.getElementById('input');
    const resetButton = document.getElementById('reset-button');

    const prevButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');
    const parentButton = document.getElementById('parent-button');
    const firstChildButton = document.getElementById('first-child-button');
    const lastChildButton = document.getElementById('last-child-button');

    const matchedClassName = 'matched';
    const activeButtonClassName = 'active-button';

    function reset(){
        for (let i = 0; i < appButtonsLength; i++) {
            appButtons.children[i].removeAttribute('disabled');
            appButtons.children[i].classList.remove(activeButtonClassName);
        }
        let element = document.getElementsByClassName(matchedClassName)[0];
        if (element){
            element.classList.remove(matchedClassName);
        }
    }

    resetButton.addEventListener('click', function(){
        reset();
        input.value =  null;
    });

    function nodeCheck(selector){
        for (let i = 0; i < appButtonsLength; i++) {
            appButtons.children[i].setAttribute('disabled', 'disabled');
            appButtons.children[i].classList.remove(activeButtonClassName);
        }

        if (selector.nextElementSibling){
            nextButton.classList.add(activeButtonClassName);
            nextButton.removeAttribute('disabled');
        }

        if (selector.previousElementSibling){
            prevButton.classList.add(activeButtonClassName);
            prevButton.removeAttribute('disabled');
        }

        if (selector.parentElement){
            parentButton.classList.add(activeButtonClassName);
            parentButton.removeAttribute('disabled');
        }

        if (selector.firstElementChild){
            firstChildButton.classList.add(activeButtonClassName);
            firstChildButton.removeAttribute('disabled');
        }

        if (selector.lastElementChild){
            lastChildButton.classList.add(activeButtonClassName);
            lastChildButton.removeAttribute('disabled');
        }
    }

    for (let i = 0; i < appButtonsLength; i++) {

        let button = appButtons.children[i];
        let buttonId = button.id;

        button.addEventListener('click', function(){
            let element = document.getElementsByClassName(matchedClassName)[0];
            let willChangeElement = '';

            if (buttonId === 'next-button'){
                willChangeElement = element.nextElementSibling;

            } else if (buttonId === 'previous-button') {
                willChangeElement = element.previousElementSibling;

            } else if (buttonId === 'parent-button') {
                willChangeElement = element.parentElement;

            } else if (buttonId === 'first-child-button') {
                willChangeElement = element.firstElementChild;

            } else if (buttonId === 'last-child-button') {
                willChangeElement = element.lastElementChild;

            }

            if (willChangeElement){
                nodeCheck(willChangeElement);
                element.classList.remove(matchedClassName);
                willChangeElement.classList.add(matchedClassName);
            }
        });
        
    }

    input.addEventListener('input', function(){

        reset();

        let val = this.value;
        let selector = '';

        if (val !== ''){
            selector = document.querySelector(val);
        }

        if (selector){
            nodeCheck(selector);
            selector.classList.add(matchedClassName);
        }

    });
    
};