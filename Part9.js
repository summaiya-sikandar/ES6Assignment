// QUESTION 1
function varExample() {
    var x = 10;
  }
  
  varExample();
//   document.write("1."+x +"<br>"); 

// QUESTION 2
function letExample() {
    let y = 20;
  }
  
letExample();
// document.write("2."+y +"<br>");


// QUESTION 3
function constExample() {
    const z = 30;
  }
  
  constExample();
//   document.write("3."+z +"<br>");

// QUESTION 4
function undeclaredExample() {
    undeclaredVar = 'Hello';
  }
  undeclaredExample();
  document.write("4."+undeclaredVar+"<br>");

// QUESTION 5
  document.write("5."+someFunction() +"<br>");
  function someFunction() {
    return 'Hello';
  }
  