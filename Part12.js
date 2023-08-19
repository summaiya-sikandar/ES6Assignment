// QUESTION 1
document.write("<br>1. ");
const myObject = {
    name: 'Alice',
    age: 30,
    country: 'USA'
  };
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      document.write(`${key}: ${myObject[key]}`);
    }
  }
  const myArrayy = ['Alice', 30, 'USA'];
  for (let i = 0; i < myArray.length; i++) {
    document.write(myArrayy[i]);
  }

// QUESTION 2
  const person6 = {
    name: 'Alice',
    age: 30,
    country: 'USA'
  };
  document.write("<br>2. ");
  for (const key in person6) {
    document.write(key);
  }
// QUESTION 3
  
  const numbersss = [1, 2, 3, 4, 5];
  document.write("<br>3. ");
for (const index in numbersss) {
  document.write(index);
}

// QUESTION 4
const msg = 'Hello, world!';
document.write("<br>4. ");
for (const index in msg) {
  document.write(msg[index]);
}
// QUESTION 5

const scores = new Map([
    ['Alice', 95],
    ['Bob', 88],
    ['Carol', 78]
  ]);
  document.write("<br>5. ");
  for (const key in scores) {
    document.write(`Name: ${key}, Score: ${scores[key]}`);
  }

 // QUESTION 6 
  const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  document.write("<br>6. ");
  for (const key in car) {
    document.write(car[key]);
  }
  
  