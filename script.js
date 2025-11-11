const title = document.querySelector('h1');
const paragraph = document.querySelector('p');
const button = document.querySelector('.btn');
const main = document.querySelector('main');

title.style.color = 'red';
title.innerHTML = '<b>Hello, World!</b>';

paragraph.style.fontSize = '20px';
paragraph.style.fontFamily = 'Arial, sans-serif';

button.style.borderRadius = "12px";
button.style.padding = "5px 10px";
button.style.backgroundColor = "#008CBA";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.color = "white";

button.addEventListener('click', ()=>{
    alert('Button was clicked!');
    paragraph.textContent = 'You clicked the button!';
})

main.style.display = 'flex';
main.style.flexDirection = 'column';
main.style.alignItems = 'center';
main.style.justifyContent = 'center';

const p = document.createElement('p');
p.textContent = 'This is a new paragraph added by JavaScript.';
p.classList.add('text');
const secondP = main.children[2];
main.insertBefore(p,secondP);

const newParagraph = document.querySelector('.text');
newParagraph.style.color = 'green';
newParagraph.style.fontSize = '18px';

