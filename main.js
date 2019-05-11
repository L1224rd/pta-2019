const title = document.querySelector('h1');
const divMain = document.querySelector('#main');

const gel = (selector) => {
  return document.querySelector(selector);
}

window.add = () => {
  console.log('yay');
  gel('body').innerHTML += `
    <p>${gel('#main-input').value}</p>
  `;
}

divMain.style.backgroundColor = 'red';
divMain.style.height = '100px';


// document.querySelector('#main-input').addEventListener('keypress', () => {
//   title.innerHTML = document.querySelector('#main-input').value;
// });




// const down = (i = 0) => {
//   divMain.style.height = `${i}px`;
//   setTimeout(() => {
//     down(i + 1);
//   }, 50);
// }

// down(100);

// setInterval(() => {
//   i++;
//   title.innerHTML = i;
// }, 100);
