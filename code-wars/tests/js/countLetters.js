const countLettersFromText = (text) => {
  
  const listOfLetters = text.split('')
  const countOfLetters = {}

  listOfLetters.forEach(item => {
    countOfLetters[item] ??= 0
    countOfLetters[item] ++
  })

  return countOfLetters

}

console.log(countLettersFromText(""))