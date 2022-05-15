const getDigitalRoot = (number) =>{
  let listDigistOfTheNumber = String(number).split('')
  let sumOfDigits  
  do{
    sumOfDigits = addDigits(listDigistOfTheNumber)
    listDigistOfTheNumber = String(sumOfDigits).split('')
    console.log(sumOfDigits)
  } while(isOneDigitNumber(sumOfDigits)){
    return Number(sumOfDigits)
  }
}

const addDigits = (digits) => {
  return digits.reduce((sumOfPreviousElements, actualNumber) => Number(sumOfPreviousElements) + Number(actualNumber))
}

const isOneDigitNumber = (number) => {
  return String(number).length > 1 ? true : false
}

console.log(getDigitalRoot(0))