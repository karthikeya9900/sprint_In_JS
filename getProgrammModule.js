const isNumber = (number) => !isNaN(number);
const isValidNumericCode = (code) => code.every(isNumber);

export const getProgram = () => {
  const code = prompt("enter the code:").trim().split(" ");
  const numericConvertedCode = code.map((number) => +number);

  return isValidNumericCode(numericConvertedCode)
    ? numericConvertedCode
    : getProgram();
};
