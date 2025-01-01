const isNumber = (number) => !isNaN(number);
const isValidNumericCode = (code) => code.every(isNumber);

const getProgramm = () => {
  const code = prompt("enter the code:").trim().split(" ");
  const numericConvertedCode = code.map((number) => +number);

  return isValidNumericCode(numericConvertedCode)
    ? numericConvertedCode
    : getProgramm();
};

console.log(getProgramm());
