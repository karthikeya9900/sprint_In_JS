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

import { updateProgram } from "./exugution.js";

export const copy = (program, index) => {
  const copyValueIndex = program[index + 1];
  const copyValue = program[copyValueIndex];
  updateProgram(program, index + 2, copyValue);
  return index + 3;
};

export const add = (program, index) => {
  const result = program[index + 1] + program[index + 2];
  updateProgram(program, index + 3, result);

  return index + 4;
};

export const sub = (program, index) => {
  const result = program[index + 1] - program[index + 2];
  updateProgram(program, index + 3, result);

  return index + 4;
};

export const jump = (program, index) => {
  const nextIndex = program[index + 1];
  return nextIndex;
};

export const jumpIfEqual = (program, index) => {
  const value =
    program[index + 1] === program[index + 2] ? program[index + 3] : index + 4;

  return value;
};

export const jumpIfLessThan = (program, index) => {
  const value =
    program[index + 1] < program[index + 2] ? program[index + 3] : index + 4;

  return value;
};

export const put = (program, index) => {
  const value = program[index + 1];
  updateProgram(program[index + 2], value);
  return index + 2;
};

export const mul = (program, index) => {
  const result = program[index + 1] * program[index + 2];
  updateProgram(program, index + 3, result);

  return index + 4;
};

export const div = (program, index) => {
  const result = program[index + 1] / program[index + 2];
  updateProgram(program, index + 3, result);

  return index + 4;
};
