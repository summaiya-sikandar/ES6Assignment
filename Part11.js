// QUESTION 1
const fruits = ['apple', 'banana', 'orange', 'grape'];
document.write("1. ");
for (const fruit of fruits) {
  document.write(fruit);
}
// QUESTION 2

const message = 'Hello, world!';
document.write("<br>2. ");
for (const char of message) {
    document.write(char);
}

// QUESTION 3
const perso = {
    name: 'Alice',
    age: 30,
    country: 'USA'
  };
  document.write("<br>3. ");
  for (const value of Object.values(perso)) {
    document.write(value);
  }
  
// QUESTION 4
const per1 = {
    name: 'Alice',
    age: 30,
    country: 'USA'
  };
  document.write("<br>4. ");
  for (const [key, value] of Object.entries(per1)) {
    document.write(`${key}: ${value}`);
  }
  
// QUESTION 5
const colors = new Set(['red', 'green', 'blue', 'yellow']);
document.write("<br>5. ");
for (const color of colors) {
  document.write(color);
}

// QUESTION 6

const myArray = [];
document.write("<br>6. check console.");
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (const value of myArray) {
  console.log(value);
}
