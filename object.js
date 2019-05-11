const person = {
  name: 'Eder',
  hobbies: ['dnan, fewkl fjw'],
  age: 22,
  walk: () => {
    console.log('walking');
    return '0k';
  }
};

const person1 = (name, age) => {
  return {
    name: name,
    age: age
  }
}

console.log(person);

console.log(person.walk());