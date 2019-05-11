const gel = (selector) => {
  return document.querySelector(selector);
}

let id = 0;

let items = [];

const populate = () => {
  console.log(items);
  gel('#items').innerHTML = '';
  items.forEach((item) => {
    gel('#items').innerHTML += `
      <p>${item.value} - <span onclick="window.edit(${item.id},'${item.value}')">✎</span> - <span onclick="window.delete(${item.id})">🗑</span></p>
    `;
  });
}

window.add = () => {
  id++;
  items.push({
    id,
    value: gel('#main-input').value,
  });
  populate();
}

window.delete = (id) => {
  items = items.filter(item => item.id !== id);
  populate();
}

window.edit = (id, value) => {
  window.delete(id);
  gel('#main-input').value = value;
}