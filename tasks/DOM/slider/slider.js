const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const itemsList = document.querySelector('#items');

rightBtn.addEventListener("click", evt => {
    evt.preventDefault();
    itemsList.appendChild(itemsList.firstElementChild);
})

leftBtn.addEventListener("click", evt => {
    evt.preventDefault();
    itemsList.insertBefore(itemsList.lastElementChild,itemsList.firstElementChild);
})