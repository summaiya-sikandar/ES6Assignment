const getStringLength = (str) => str.length;

const inputString = "Hello, world!";
const length = getStringLength(inputString);
document.write(`2. The length of the string is: ${length} <br>`);

const multiplyNumbers = (num1, num2) => num1 * num2;

const mul = multiplyNumbers(5, 7);
document.write(`3.The product is: ${mul} <br>`);

const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0; 
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  };
  
const numberArr = [5, 10, 15, 20];
const average = calculateAverage(numberArr);
document.write(`4. The average is: ${average} <br>`); 

const greetPerson = (name) => `Hello, ${name}!`;

  const nam = "Alice";
  const greeting = greetPerson(nam);
  document.write("5. "+ greeting+ "<br>");

const getRandomNumber = () => Math.random();

  const randomValue = getRandomNumber();
  document.write(`6. Random number: ${randomValue} <br>`);

