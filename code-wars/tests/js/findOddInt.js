const countRepeatNumbers = (listOfNumbers) => {
  const amountOfReapeatedNumbers = {}

  listOfNumbers.forEach(number => {
    amountOfReapeatedNumbers[number] ??= 0
    amountOfReapeatedNumbers[number] += 1
  });

  return findOddInt(amountOfReapeatedNumbers)
}

const findOddInt = (repeatedNumbers) => {
  for (const key in repeatedNumbers) {
    if(repeatedNumbers[key] % 2 === 1) return Number(key)
  }
}

console.log(countRepeatNumbers([1,2,2,3,3,3,4,3,3,3,2,2,1]))