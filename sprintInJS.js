const isNumber = (number) => (isNaN(number) ? false : true);
const isValidNumericCode = (code) => code.every(isNumber);
const convertToNumericCode = (code) => code.map((number) => +number);

const getCode = () => {
  const code = prompt("enter the code:").trim().split(" ");
  const numericConvertedCode = convertToNumericCode(code);

  return isValidNumericCode(numericConvertedCode)
    ? numericConvertedCode
    : getCode();
};

console.log(getCode());
