function getMth (bottle) {
    var cost = bottle * 1.5;
    console.log(cost);
}
getMth(10);

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveup");
    console.log("moveRight");
    var myName = Math.floor(money / 1.5);
    console.log("buy " + myName + " bottles of milk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("enterHouse");
    return money % 1.5;
}
var change = getMilk(4);
console.log(change);