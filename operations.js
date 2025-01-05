import { updateProgram } from "./sprintInJS";

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

export const put = (program, index) => {
  const value = program[index + 1];
  updateProgram(program[index + 2], value);
  return index + 3;
};

export const copy = (program, index) => {};
