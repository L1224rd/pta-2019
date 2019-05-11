const a = [1, 2, 3, 4, 'eder'];

console.log(a[5]);

for(let i = 0; i < a.length; i++){
  console.log(a[i]);
}

const c = [];

a.forEach((each) => {
 c.push(each + 5);
});

console.log(c);

console.log(a.join('0'));

console.log(a.slice(2, 4));

a.push('e', 'e');

console.log(a);

a.pop('fewfew');

console.log(a);

const b = a.map((each) => {
  return each * 5;
});

console.log(b);

const d = ['fdsa', 'fes', 'fewf'];

console.log(d.map((each) => {
  return each.toUpperCase()
}).map((each) => {
  return each.substr(0,2)
}));