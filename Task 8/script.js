/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor() {}
    
    sum(a, b) {
      return a + b;
    }
    
    subtraction(a, b) {
      return a - b;
    }
    
    multiplication(a, b) {
      return a * b;
    }
    
    division(a, b) {
      return a / b;
    }
  }

const calc = new Calculator();

let result = calc.sum(1, 2);
console.log(result);

result = calc.subtraction(5, 3);
console.log(result);

result = calc.multiplication(2, 3);
console.log(result); 

result = calc.division(10, 5);
console.log(result);
