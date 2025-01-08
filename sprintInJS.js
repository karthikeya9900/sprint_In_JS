/*
0 -> copy ---> 3 params                [ op value  destinstion ]

1 -> add  ---> 4 params                [ op val1 val2 destination ]  takes two cell numbers and adds the values in it and store it in a destinstion cell  number

2 -> sub  ---> 4 params                [ op val1 val2 destination ] takes two cell numbers and subtracts the values in it and store it in a destinstion cell  number

3 -> jump ---> 2 params                [ op destination] takes one one destination cell numver and moves cursor moves to the that location

4 -> jump If Equal  ---> 4 params      [ op val1 val2 destination ]  takes two values and compare if they are equal mmoves to a particular location 

5 -> jump If Less Than  ---> 4 params  [ op val1 val2 destination ]  takes two values and and check if first one is less than second one it moves to a particular location  

6 -> put ---> 3 params                 [ op value destination ]  used to put direct value into a cell 

7 -> mul ---> 4 params                 [ op val1 val2 destination ]   takes two cell numbers and multiplies the values in it and store it in a destinstion cell  number
8 -> div ---> 4 params                 [ op val1 val2 destination ]  takes two cell numbers and divides the values in it and store it in a destinstion cell  number
9 -> stop ---> 1 params                [ stop ] it stops the programm exegution 

*/

/*
0 -> copy ---> 3 params                [ op value  destinstion ]
1 -> add  ---> 4 params                [ op val1 val2 destination ]
2 -> sub  ---> 4 params                [ op val1 val2 destination ] 
3 -> jump ---> 2 params                [ op destination]
4 -> jump If Equal  ---> 4 params      [ op val1 val2 destination ]
5 -> jump If Less Than  ---> 4 params  [ op val1 val2 destination ]
6 -> put ---> 3 params                 [ op value destination ]
7 -> mul ---> 4 params                 [ op val1 val2 destination ]
8 -> div ---> 4 params                 [ op val1 val2 destination ]
9 -> stop ---> 1 params                [ stop ] 
*/

import { exeguteProgram } from "./exugution.js";

const isNumber = (number) => !isNaN(number);
const isValidNumericCode = (code) => code.every(isNumber);

const getProgramFromUser = () => {
  const code = prompt("enter the code:").trim().split(" ");
  const numericConvertedCode = code.map((number) => +number);

  return isValidNumericCode(numericConvertedCode)
    ? numericConvertedCode
    : getProgramFromUser();
};

const runSprint = () => {
  const program = getProgramFromUser();
  // console.log(program);

  return exeguteProgram(program);
};

console.log(runSprint());

// console.log(performOperation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
