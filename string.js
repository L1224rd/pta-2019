const a = 'Eder';
let b = 'Marques';

const phrase = 'todos os dias quando acordo';

const date = '12/12/2012';

console.log('Meu nome é ' + a + ' ' + b); 

console.log(`Meu nome é ${a} ${b}`);

console.log(a.substr(1, 3));
console.log(a.substring(1, 3));

console.log(phrase.split(' '));
console.log(date.split('').join('-'));

console.log(typeof phrase.indexOf('todos'));

console.log(phrase.indexOf('s'));

console.log(phrase.length);


