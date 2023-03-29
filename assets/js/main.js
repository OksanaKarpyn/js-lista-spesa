let arrayLista = ['Frutta', 'latte', 'pane', 'biscotti', 'caffe', 'verdure'];
let i = 0;
let lista = document.querySelector('.lista-spesa');


let btn = document.querySelector('.btn').addEventListener('click', function () {

    while (i <= arrayLista.length) {

        let listUl = document.createElement('ul');
        listUl.classList.add('list-group');
        listUl.classList.add('list-group-flush');
        listUl.classList.add('d-flex');
        listUl.classList.add('align-middle')

        lista.appendChild(listUl);

        let listItem = document.createElement('li');
        listItem.innerHTML += `<li>${arrayLista[i]}</li>`;
        listItem.classList.add('list-group-item');
        listItem.style.direction = 'rtl';
        listUl.appendChild(listItem);


        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.style.margin = '5px';
        listItem.appendChild(input);
        i++;
    }

});