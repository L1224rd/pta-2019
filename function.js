a(4, 5, 6);

function a(a, b, c){
  console.log(this);
  console.log(a, b, c);
}

a(1, 2, 3);

const b = (a, b, c) => {
  console.log(a, b, c);
  return 'yay';
}

const af = [1];

if(!af.length){
  console.log('yay');
}

console.log(b(1, 2, 3));

const t = [1, 2, 3, 4, 5, 6, 7];

const u = t.filter((each, cachor) => {
  return cachor !== 4;
});

console.log(u);

const up = (string) => {
  return string.toUpperCase();
}

const rev = (string) => {
  return string.split('').reverse().join('');
}

console.log(up(rev('eder')));

