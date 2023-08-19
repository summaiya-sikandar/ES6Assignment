const createSquareMap = (numbersArray) => {
    const squareMap = new Map();
  
    numbersArray.forEach(number => {
      squareMap.set(number, number * number);
    });
  
    return squareMap;
  };
  
  // Example usage
  const numberA = [1, 2, 3, 4, 5];
  const squareMap = createSquareMap(numberA);
  
  document.write("1. "+squareMap.get(3) +" <br>");

const createNameToAgeMap = (peopleArray) => {
    const nameToAgeMap = new Map();
  
    peopleArray.forEach(person => {
      nameToAgeMap.set(person.name, person.age);
    });
  
    return nameToAgeMap;
  };
  
  const peoplee = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 }
  ];
  
  const nameToAgeMap = createNameToAgeMap(peoplee);
  
  document.write("2. "+nameToAgeMap.get('Alice')+" <br>");

const containsKey = (map, key) => {
    return map.has(key);
  };

  const myMap = new Map();
  myMap.set('a', 1);
  myMap.set('b', 2);
  
  document.write("3. "+containsKey(myMap, 'a') +"<br>");
  
const filterMap = (map, callback) => {
    const filteredMap = new Map();
  
    for (const [key, value] of map) {
      if (callback(key, value)) {
        filteredMap.set(key, value);
      }
    }
  
    return filteredMap;
  };

  const myMapp = new Map();
  myMapp.set('apple', 5);
  myMapp.set('banana', 8);
  myMapp.set('cherry', 3);
  
  const filtered = filterMap(myMapp, (key, value) => value > 4);
  document.write("4. "+filtered+"<br>");
  