// QUESTION 1
const p1 = {
    name: 'Alice',
    greet: function() {
      document.write(`1. Hello, my name is ${this.name}.<br>`);
    }
  };
  
  p1.greet(); 

//   QUESTION 2
  function Carr(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
    document.write(`2. Current speed of ${this.brand} is ${this.speed} mph.<br>`);
    };
  }
  
  const myCar = new Carr('Toyota', 50);
  myCar.accelerate(20);
  myCar.printSpeed(); 
  
// QUESTION 3
  const calculator = {
    value: 0,
  
    add: function(number) {
      this.value += number;
    },
  
    subtract: function(number) {
      this.value -= number;
    },
  
    multiply: function(number) {
      this.value *= number;
    },
  
    printValue: function() {
        document.write(`3. Current value: ${this.value} <BR>`);
    }
  };
  
  calculator.add(10);
  calculator.subtract(5);
  calculator.multiply(3);
  calculator.printValue(); 

// QUESTION 4

const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    printInfo: function() {
        document.write(`4. Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages} <br>`);
    }
  };
  
  book.printInfo(); 

// QUESTION 5

function Pers(name, age) {
    this.name = name;
    this.age = age;
  
    this.introduce = function() {
        document.write(`5. Hi, I'm ${this.name} and I'm ${this.age} years old. <br>`);
    };
  }
  
  const person23 = new Pers('Alice', 30);
  person23.introduce();
  
// QUESTION 6

const counter = {
    count: 0,
    increment: function() {
      this.count++;
    },
    reset: function() {
      this.count = 0;
    }
  };
  
  counter.increment();
  document.write("6. "+ counter.count+"<br>"); 

// QUESTION 7
const product = {
    name: 'Smartphone',
    price: 500,
    discount: 0.2,
    calculateDiscountedPrice: function() {
      return this.price - (this.price * this.discount);
    }
  };
  
  document.write("7. "+product.calculateDiscountedPrice()+"<br>"); 

// QUESTION 8
const game = {
    play: function() {
      document.write('8. Playing the game...');
    }
  };
  
  game.play(); 
  

  
  
  
  