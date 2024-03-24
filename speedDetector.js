//Prompt the user input
const prompt = require("prompt-sync")({ sigint: true });

const speed = prompt ('Enter speed: ');


//Write a function that detects the speed
function detectSpeed (speed){
    //Create variables for the limit and the aboveLimit
    let limit = 70;
    let aboveLimit = 130;  // aboveLimit = (12points * 5) + 70    
    
    //figure the return value for each speed
    if (speed < limit) {
        return 'Ok';
    }else if (speed > limit && speed < aboveLimit) {
        return ((speed - limit) / 5) * 1;
    }else if (speed > aboveLimit) {
        return 'License suspended';
    }
}

//Log the output in the console and use the varible containing the prompt function as the argument
console.log(detectSpeed(speed)); 