const Result = (props) => {
  const { first, second, operator } = props;
  let { result } = props;
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
    case "*":
      result = first * second;
      break;
    default:
      break;
  }
  return result;
};

export default Result;
