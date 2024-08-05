const getMiddle = (word) => {
  const splittingWord = word?.split('')
  const isEven = splittingWord?.length % 2 === 0
  const getMiddleNumber = Math.ceil(splittingWord?.length / 2) - 1
  return isEven ? `${splittingWord[getMiddleNumber]}${splittingWord[getMiddleNumber + 1]}` : splittingWord[getMiddleNumber]
}

console.log(getMiddle('teting'))