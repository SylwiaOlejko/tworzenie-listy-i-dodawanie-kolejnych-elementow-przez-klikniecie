let size = 10;
let orderElement = 1;

const init = () => {
 const btn = document.createElement('button');
 btn.textContent = "Dodaj 10 elementów listy";
 btn.style.fontSize = "28px";

 document.body.appendChild(btn);
 const ul = document.createElement('ul');
 document.body.appendChild(ul);
 btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {

    for(let i = 0; i < 10; i++){
        const li = document.createElement('li');
        li.textContent = 'Element nr ${1++}';
        document.querySelector('ul').appendChild(li);

    }

}

init()

