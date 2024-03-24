# wk1-code-challenge

## challenges
1. `studentGradeGenerator`
2. `speedDetector`
3. `netSalaryCalculator`

# studentGradeGenerator
Write a program that prompts the user to input student marks.
The input should be between 0 - 100. Then output the correct grade.

## instructions
Prompt a user input for the console and create a variable for the prompt function.
Create a function `gradeGenerator` that outputs a grade based on the marks provided by the user.
Log the output in the console using `console.log()`.
Use the variable containing the prompt function as the argument of the `gradeGenerator` function.
Each provided marks shall have a grade as the output.


# speedDetector
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

## instructions
Prompt a user input for the console and create a variable for the prompt function.
Create a function `detectSpeed` that detects the speed provided and outputs it`s usage legitimacy.
Log the output in the console using `console.log()`.
Use the variable containing the prompt function as the argument of the `detectSpeed` function.


# netSalaryCalculator
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

## instructions
Prompt a user input for the console and create a variable for the prompt function.
Create a function `paye` that outputs the amount to be subtracted from the provided amount inorder to be paid as the tax.
Create another function `nhif` that calculates the amount to be deducted from the salary as a deduction.
Add the PAYE and NHIFdeductions by using the values from the `paye` function in the `nhif` function.
Create another function `nssf` that calculates the amount to be deducted from the salary as another deduction.
Add it to the PAYE and NHIFdeductions by using the values from the `nhif` function in the `nssf` function.
Finally subtract that added amount from the provided amount to get the Net salary.
Then log the output in the console using `console.log()`.
Use the variable containing the prompt function as the argument of the `netSalary` function.