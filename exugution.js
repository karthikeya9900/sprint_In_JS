export const getOperation = (program, currentIndex) => {
  const operations = {
    0: ["copy", 3],
    1: ["add", 4],
    2: ["sub", 4],
    3: ["jump", 2],
    4: ["jumpIfEqual", 4],
    5: ["jumpIfLessThan", 4],
    6: ["put", 3],
    7: ["mul", 4],
    8: ["div", 1],
  };
  return operations[program[currentIndex]];
};

export const updateProgram = (program, currentIndex, value) => {
  const prog = [...program];
  const targerLocation = prog[currentIndex];

  prog[targerLocation] = value;

  return prog;
};

const performOperation = (program, currentIndex) => {
  const operation = getOperation(program, currentIndex);
  console.log(operation);
  return currentIndex + operation[1];
};

export const exeguteProgram = (program) => {
  console.log(program);

  return "hello";
};
