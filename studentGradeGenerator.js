//Prompt the user input
const prompt = require("prompt-sync")({ sigint: true });

const grade =  prompt ('Enter your grade: ' );


//Calculate the grades for the marks
function gradeGenerator (marks) {
    if (marks > 79 && marks <= 100) {
        return 'Your grade is A';
    }else if (marks >=60 && marks <=79) {
        return 'Your grade is B';
    }else if (marks >= 49 && marks <= 59) {
        return 'Your grade is C';
    }else if (marks >= 40 && marks < 49) {
        return 'Your grade is D';
    }else if (marks < 40) {
        return 'Your grade is E';
    }else {return 'Please enter from 0-100'}
}

//log the output in the console
//Use the variable containing the prompt function
console.log(gradeGenerator(grade));