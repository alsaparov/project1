console.log(document.head);
console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.querySelector('#current').parentElement.parentElement.parentNode);
// работаем с элементами а не с узлами
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // даёт элемент
for (const node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}