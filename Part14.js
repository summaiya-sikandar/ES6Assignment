// Question 1
function counterrr() {
    let count = 0; 
    return function() {
      count++;
      document.write('1. Counter:', count+"<br>");
    };
  }
const incrementCounter = counterrr();
incrementCounter(1)

// Question 2
function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  const multiplyByTwo = createMultiplier(2);
  document.write("2. "+multiplyByTwo(5) +"<br>");
  
// Question 3
function secretMessage(message) {
    return function(secret) {
      document.write(`3. Secret: ${secret}, Message: ${message}<br>`);
    };
  }
  const revealMessage = secretMessage('This is a secret.');
  revealMessage('Shh...'); 

// Question 4
function calculate(num1, num2) {
    return {
      add: function() {
        return num1 + num2;
      },
      multiply: function() {
        return num1 * num2;
      }
    };
  }
  const calculatorrr = calculate(5, 3);
  document.write("4. ")
  document.write(calculatorrr.add()); 
  document.write(calculatorrr.multiply());
  
  
  