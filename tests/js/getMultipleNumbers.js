const number = 8
const numbersToCompare = [3, 5]

const getMultipleNumbersByBaseNumber= (number) => {
  const multipleNumbers = []
  for(let i = 1; i !== number; i++){
    numbersToCompare.map(number => i % number === 0 && multipleNumbers.push(i))
  }
  return multipleNumbers
}

const addNumbers = () => {
  const numbersToAdd = getMultipleNumbersByBaseNumber(number)
  return numbersToAdd.reduce((sumOfPreviousElements, actualNumber) => sumOfPreviousElements + actualNumber)
}

console.log(addNumbers())