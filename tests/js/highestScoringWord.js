const getHighestScoringWord = (text) => {
  
  const valueOfWords = printScores(text)
  let maxValue = 0

  for (const key in valueOfWords) {
    if(valueOfWords[key] > maxValue) maxValue = valueOfWords[key]
  }

  return Object.keys(valueOfWords).find(key => valueOfWords[key] === maxValue);
}

const printScores = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const listOfLettersByText = text.split(' ')
  const valueOfWords = {}

  for (let i = 0; i < listOfLettersByText.length; i++) {
    const letter = listOfLettersByText[i]?.split('')
    for (let j = 0; j < letter.length; j++) {
      const value = alphabet.findIndex(item => item === letter[j]) + 1
      valueOfWords[listOfLettersByText[i]] ??= 0
      valueOfWords[listOfLettersByText[i]] += value
    }
  }

  return valueOfWords

}

console.log(getHighestScoringWord('man i need a taxi up to ubud'))