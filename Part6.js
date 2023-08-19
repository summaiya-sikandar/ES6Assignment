const squareWithDelay = (number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const square = number * number;
        resolve(square);
      }, 1000);
    });
  };
  
  const inputNumber = 5;
  squareWithDelay(inputNumber).then((result) => {
    console.log(`1.The square of ${inputNumber} is: ${result} <rbr>`);
  });

const resolveAllPromises = (promisesArray) => {
    return Promise.all(promisesArray);
  };

  const promise1 = Promise.resolve(10);
  const promise2 = Promise.resolve(20);
  const promise3 = Promise.resolve(30);
  
  const promisesArray = [promise1, promise2, promise3];
  resolveAllPromises(promisesArray).then((resolvedValues) => {
    document.write('Resolved values:', resolvedValues +"<br>"); 
  });

  const sumOfResolvedPromises = (promise1, promise2) => {
    return Promise.all([promise1, promise2])
      .then(([value1, value2]) => value1 + value2);
  };
  
  const promiseA = Promise.resolve(10);
  const promiseB = Promise.resolve(20);
  
  sumOfResolvedPromises(promiseA, promiseB).then((sum) => {
    document.write('Sum of resolved values:', sum +"<br>"); 
  });