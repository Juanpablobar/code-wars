const squareSum = (numbers) => numbers?.reduce((prev, current) => prev + Math.pow(current, 2), 0)

console.log(squareSum([0, 3, 4, 5]))