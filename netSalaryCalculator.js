//Prompt the user input.
const prompt = require("prompt-sync")({ sigint: true });

const grossSalary = prompt ('Please enter your Basic salary: ');


//Calculate the PAYE of the inputed salary.
function paye (salary) {
    if (salary > 0 && salary <=24000) {
        return salary * (10.0/100);
    }
    else if (salary >= 24001 && salary <= 32333) {
        return salary * (25.0/100);
    }
    else if (salary >= 32334 && salary <= 500000) {
        return salary * (30.0/100);
    }
    else if (salary >= 500001 && salary <= 800000) {
        return salary * (32.5/100);
    }
    else if (salary > 800000) {
        return salary * (35.0/100);
    }
}

//Add NHIFdeductions to the PAYE.
//Use the values from the calculations of the PAYE.
function nhif(salaryy) {
    const payee = paye(salaryy);
    if (payee >0 && payee <=5999) {
        return payee +150;
    }
    else if (payee >=6000 && payee <=7999) {
        return payee +300;
    }
    else if (payee >=8000 && payee <=11999) {
        return payee +400;
    }
    else if (payee >=12000 && payee <=14999) {
        return payee +500;
    }    
    else if (payee >=15000 && payee <=19999) {
        return payee +600;
    }
    else if (payee >=20000 && payee <=24999) {
        return payee +750;
    }  
    else if (payee >=25000 && payee <=29999) {
        return payee +850;
    }  
    else if (payee >=30000 && payee <=34999) {
        return payee +900;
    }  
    else if (payee >=35000 && payee <=39999) {
        return payee +950;
    }  
    else if (payee >=40000 && payee <=44999) {
        return payee +1000;
    }  
    else if (payee >=45000 && payee <=49999) {
        return payee +1100;
    }  
    else if (payee >=50000 && payee <=59999) {
        return payee +1200;
    }    
    else if (payee >=60000 && payee <=69999) {
        return payee +1300;
    }
    else if (payee >=70000 && payee <=79999) {
        return payee +1400;
    }
    else if (payee >=80000 && payee <=89999) {
        return payee +1500;
    }
    else if (payee >=90000 && payee <=99999) {
        return payee +1600;
    }
    else if (payee >=100000) {
        return payee +1700;
    }
}

//Add NSSFdeductions to the PAYE AND NHIFdeductions.
//Use the values from the calculations of the NHIFdeductions.
function nssf(pension){
    const contribution = nhif(pension);
    return contribution + (6/100) * 7000;
}

//After adding the PAYE and the deductions,
//remove it from the Gross salary to get the Net salary. 
function netSalary(homepay){
    const netPay = nssf(homepay)
    return 'Your net salary is: ', grossSalary - netPay;
}

//Finally, log the Net salary in the console.
//Use the variable containing the prompt as it`s argument.
console.log(netSalary(grossSalary));