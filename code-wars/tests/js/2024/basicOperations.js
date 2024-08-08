const basicOp = (operation, value1, value2) => eval(`${value1}${operation}${value2}`)

console.log(basicOp("+", 4, 7))