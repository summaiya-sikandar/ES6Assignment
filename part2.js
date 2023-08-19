function greet(details){
   
    return `Hello ${details.name}`
}
greetings= greet({name:"Mr. Ali", age: 40})
document.write("1. "+ greetings + "<br>")

function sumNavg(arr){
    let sum=0
    let avg=0
    for (i in arr){
        sum= arr[i] + sum;
    }
    avg= sum/ arr.length;
    return sum ,avg;
}

let add, avg= sumNavg([1,2,3])
document.write("2. "+ add + " ,"+avg + "<br>")

function info(details){
    var msg= `${details.quantity} ${details.name} in price ${details.price}`
    return msg
}
de= info({name:" juice", price: 50 , quantity: 1})
document.write("4. "+ de + "<br>")


function format(inputDate) {
     let date, month, year;
      date = inputDate.getDate();
       month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear(); 
        date = date .toString() .padStart(2, '0'); 
        month = month .toString() .padStart(2, '0');
         return `${date}/${month}/${year}`;
         }
const result = format(new Date()); 
document.write("5. "+ result + "<br>")





