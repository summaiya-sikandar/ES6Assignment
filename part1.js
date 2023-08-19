const Pi = 3.14159;
// Pi= 3;
document.write("1. "+Pi + "<br>")

function sumOfSquare(arr){
    let sum=0
    for (i in arr){
        sum= arr[i] * arr[i] + sum
    }
    return sum;
}

summ= sumOfSquare([1,2,3])
document.write("2. "+summ + "<br>")

function stringFirstLetter(arr){
    let letters=""
    for (i in arr){
        letters= letters + arr[i][0]
    }
    return letters;
}
letters= stringFirstLetter(["abc", "def", "ghi"])
document.write("3. "+ letters + "<br>")

function asterisks(n){
    const ast="*"
    let str=""
    for (i=1; i<=n ; i++){
        str= str+ ast;
    }
    return str;
}
strr= asterisks(3)
document.write("4. "+ strr + "<br>")

function greet(details){
    var msg= "Hello " + details.name;
    return msg
}
greetings= greet({name:"Mr. Ali", age: 40})
document.write("5. "+ greetings + "<br>")

function maxValue(...num){
    let max;
    max= Math.max(...num);
    return max;
}
max= maxValue(4,6,8,9)
document.write("6. "+ max + "<br>")



