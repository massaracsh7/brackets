module.exports = function check(str, bracketsConfig) {
   const open = [];
  const pair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
       open.push(bracketsConfig[i][0]);
       pair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];
      if (pair[currentSymbol] === topElement && stack.length !== 0) {
        stack.pop();
      } else if (open.includes(currentSymbol)) {
          stack.push(currentSymbol);
        }
        else {
        return false;
      }
    

  }
  return stack.length === 0;

}
