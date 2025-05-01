var number = prompt("write a num");

if (number % 3 === 0) {
    if (number % 5 === 0) {
        console.log("fizzbuzz");
    } else {
        console.log("fizz");
    }

} else {
    console.log("not fizz");  
}