// Question 1
document.write("1. check console <br>")
  
async function delayedGreeting(name) {
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    console.log(`Hello, ${name}!`);
  }
  delayedGreeting('Alice');

  
// Question 2
document.write("2. check console <br>")

  async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: 'Some data' });
      }, 3000); 
    });
  }
  async function processData() {
    try {
      const result = await fetchData();
      console.log('Received data:', result.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
processData(); 
  
// Question 3
document.write("3. check console <br>")

  async function fetchUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        const userList = ['Alice', 'Bob', 'Carol'];
        resolve(userList);
      }, 4000); 
    });
  }
async function processUsers() {
    try {
      const users = await fetchUsers();
      console.log('Fetched users:', users);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  processUsers(); 

//   Question 5
document.write("5. check console <br>")

  async function fetchData(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = `Data for id ${id}`;
        resolve(data);
      }, 5000); 
    });
  }
  
  async function processDataById(id) {
    try {
      const result = await fetchData(id);
      console.log('Fetched data:', result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  const dataId = 123;
  processDataById(dataId); 
  


  