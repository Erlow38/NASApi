const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  btn.remove();
  let searchbar = document.createElement('input');
  let container = document.querySelector('.hero');
    searchbar.setAttribute('type', 'text');
    searchbar.setAttribute('placeholder', 'Chercher');
    searchbar.setAttribute('class', 'searchbar');
    container.appendChild(searchbar);
});