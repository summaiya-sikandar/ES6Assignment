const addNumbers = (num1 = 0, num2 = 0) => {
    return num1 + num2;
  };
  
  const sum = addNumbers(5, 7);
  document.write(`1.Sum: ${sum} <br>`); 

const collectArguments = (...args) => {
    return args;
  };

  const arrayArgs= collectArguments(1, 'hello', true);
  document.write("2. "+ arrayArgs+ "<br> "); 

const findMax = (numbers) => {
    return Math.max(...numbers);
  };
 
  const numberArray = [5, 12, 8, 21, 3];
  const maxNumber = findMax(numberArray);
  document.write(`3. The maximum number is: ${maxNumber} <br>`);

const concatenateArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
  };
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = concatenateArrays(array1, array2);
  document.write("4." + concatenatedArray+ " <br> ");

  const generateUniqueId = (() => {
    let counter = 0;
  
    return () => {
      counter++;
      return `id_${counter}`;
    };
  })();

  const addIdToObject = (person) => {
    const newPerson = {
      ...person,
      id: generateUniqueId()
    };
  
    return newPerson;
  };
  
  const inputPerson = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  const personWithId = addIdToObject(inputPerson);
  document.write("5." + personWithId+ " <br>");

  
  
  
  