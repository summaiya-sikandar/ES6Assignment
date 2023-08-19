// QUESTION 2
class Person {
    constructor(firstname, lastname) {
     this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  
  const friend1 = new Person('John', 'Doe');
  const friend2 = new Person('Alice', 'Smith');
  
  console.log(`Hello, ${friend1.firstname} ${friend1.lastname}!`);
  console.log(`Hello, ${friend2.firstname} ${friend2.lastname}!`);
  
// QUESTION 3
class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduction() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
 
  const person1 = new Person1('Alice', 30);
  console.log(person1.introduction()); 
 
// QUESTION 4
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const rectangle = new Rectangle(5, 8);
  console.log(`Area: ${rectangle.area()}`);
  console.log(`Perimeter: ${rectangle.perimeter()}`); 

// QUESTION 5
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    diameter() {
      return 2 * this.radius;
    }
  
    circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(`Diameter: ${circle.diameter()}`); 
  console.log(`Circumference: ${circle.circumference()}`); 
  console.log(`Area: ${circle.area()}`); 


// QUESTION 6
  class Per {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduction() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  class Student extends Per {
    constructor(name, age, course) {
      super(name, age); // Call the parent class constructor
      this.course = course;
    }
  
    introduction() {
      return `${super.introduction()} I'm studying ${this.course}.`;
    }
  }
  

  const student = new Student('Alice', 20, 'Computer Science');
  console.log(student.introduction());
 
  
// QUESTION 7
class Square extends Rectangle {
    constructor(side) {
      super(side, side);
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  
    perimeter() {
      return 4 * this.side;
    }
  }

  const square = new Square(5);
  console.log(`Area: ${square.area()}`); 
  console.log(`Perimeter: ${square.perimeter()}`); 
  
  
  