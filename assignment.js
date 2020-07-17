
//1st assignment solution

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var feetCalculate = feetToMile(5000);
console.log(feetCalculate);

//2nd assignment solution

function woodCalculator(chair,table,khat){
    var woodForChair = 2*chair;
    var woodForTable = 2*table;
    var woodForKhat = 4*khat;

    var totalWood = woodForChair+woodForTable+woodForKhat;
    return totalWood;
}

var result = woodCalculator(10,20,30);
console.log(result);




//3rd assignment solution


function brickCalculator(floor){

    var perFeetBrick = 1000;
    if (floor <=10 && floor >0){
        var amountOfBrick = floor * 15*perFeetBrick;
        return amountOfBrick;
    }
    else if (floor > 10 && floor <= 20) {
        var amountOfBrick = ((floor - 10) * 12*perFeetBrick) + 150000;
        return amountOfBrick;
    }
    else if (floor > 20){
        var amountOfBrick =((floor - 20) * 10*perFeetBrick) + 270000 ;
        return amountOfBrick;
    }
    else {
        return "Invalid floor ";
    }
};
var result = brickCalculator(20);
console.log(result);



//4th assignment solution

function tinyfriend(friendName){
    let singlefriendName =friendName[0];
    for(let i = 0; i < friendNames.length; i++){
        let element = friendNames[i];
        if (element < singlefriendName){
            singlefriendName = element ;
        }
    }
    return singlefriendName;
}

let friendNames =[ "Shahed", "Moon", "Zubayer",  "kanta"];
let results = tinyfriend(friendNames);
console.log(results)