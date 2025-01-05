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

import { getOperation } from "./getOperation.js";
import { getProgram } from "./getProgrammModule.js";

export const updateProgram = (program, currentIndex, value) =>
  (program[currentIndex] = value);

const performOperation = (program, currentIndex) => {
  const operation = getOperation(program, currentIndex);
  console.log(operation);
  return currentIndex + operation[1];
};

const runSprint = () => {
  let program = getProgram();
  let currentIndex = 0;
  let opcode = program[0];
  while (opcode < 9) {
    opcode = program[currentIndex];
    currentIndex = performOperation(program, currentIndex);
  }
};

// runSprint();

console.log(performOperation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
