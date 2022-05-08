const getNarcissisticNumber = (number) => {
  const numbersBeforeTheSent = String(number).split('')
  const lengthListNumbers = numbersBeforeTheSent.length

  const powersOfNumbers = []

  numbersBeforeTheSent.forEach(number => powersOfNumbers.push(number ** lengthListNumbers))
  const sumOfPowerOfNumbers = powersOfNumbers.reduce((a, b) => a + b)

  return Number(sumOfPowerOfNumbers) === number ? true :  false
}

console.log(getNarcissisticNumber(408))