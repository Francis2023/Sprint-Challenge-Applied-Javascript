// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let container = document.querySelector('.header-container');

function Header(){

let headerTop = document.createElement('div');
headerTop.classList.add('header');
console.log(headerTop);

let date = document.createElement('span');
date.classList.add('date');
date.textContent = 'March 28, 2019';
headerTop.appendChild(date);

let head = document.createElement('h1');
head.textContent = 'Lambda Times';
headerTop.appendChild(head);

let temp = document.createElement('span');
temp.textContent = '98°';
headerTop.appendChild(temp);

return headerTop;

}

const header1 = Header();

container.appendChild(header1);