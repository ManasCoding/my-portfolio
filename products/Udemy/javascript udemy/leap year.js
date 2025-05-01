var input = prompt("enter a random year");

if (input % 4 ===0 && input % 100 !== 0 && input % 400 === 0) {
    console.log("yes, this is a leap year")
} else {
    console.log("no, this is not a leap year")
}


function myName(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "leap year";
            } else {
                return "not a leap year";
            }

        } else {
            return "leap year";
        }
    } else {
        return "not a leap year";
    }
}
myName();