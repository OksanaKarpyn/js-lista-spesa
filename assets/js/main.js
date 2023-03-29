let arraySpesa = ['Frutta', 'latte', 'pane', 'biscotti', 'caffe', 'verdure'];
let i = 0;
let lista = document.querySelector('.lista-spesa');




function generaList(arrayLista) {
    let listUl = document.createElement('ul');
    listUl.classList.add('list-group');
    listUl.classList.add('list-group-flush');
    listUl.classList.add('d-flex');
    listUl.classList.add('align-middle')
    listUl.classList.add('d-none');
    lista.appendChild(listUl);

    while (i <= arrayLista.length - 1) {
        let listItem = document.createElement('li');
        listItem.innerHTML += `<span>${arrayLista[i]}</span>`;
        listItem.classList.add('list-group-item');
        // listItem.style.direction = 'rtl';
        listUl.appendChild(listItem);

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.style.margin = '5px';
        listItem.prepend(input);
       

        i++;
    }
}


let btn = document.querySelector('.btn').addEventListener('click', function () {
lista.querySelector('ul').classList.toggle('d-none');
});
generaList(arraySpesa);