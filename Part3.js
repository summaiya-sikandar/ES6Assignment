const sumNumbers = ([num1, num2]) => {
    return num1 + num2;
  };

const numbers = [5, 7];
const summ = sumNumbers(numbers);
document.write(`1.The sum is: ${summ}  <br>`);

const getPersonInfo = ({ name, age, occupation }) => {
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation} `;
  };

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
  };
  
const personInfo = getPersonInfo(person);
document.write("2. "+personInfo + "<br>");

const getHighestScorer = ([first, ...rest]) => {
    let highestScore = first.score;
    let highestScorerName = first.name;
  
    rest.forEach(person => {
      if (person.score > highestScore) {
        highestScore = person.score;
        highestScorerName = person.name;
      }
    });
    return highestScorerName;
  };

  const people = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
  ];
  
  const highestScorer = getHighestScorer(people);
document.write(`3.The highest scorer is: ${highestScorer} <br>`);

const getInitials = ({ firstName, middleName = '', lastName }) => {
    const firstInitial = firstName[0];
    const middleInitial = middleName[0];
    const lastInitial = lastName[0];
  
    return `${firstInitial}${middleInitial}${lastInitial}`;
  };

  const personName = {
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith'
  };
  
  const initials = getInitials(personName);
 document.write(`4.Initials: ${initials} <br>`); 
  
const getFirstAndLast = (arr) => {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return { first, last };
  };

  const strings = ['apple', 'banana', 'cherry', 'date'];
  const resultt = getFirstAndLast(strings);
  document.write("5. "+resultt +"<br>");
  
  
  
  