const concatWordsByArray = (listOfWords, numberOfWordsToConcat) => {
  if(numberOfWordsToConcat > listOfWords.length || numberOfWordsToConcat <= 0) return ''

  let largestWord = ''

  for (let i = 0; i + numberOfWordsToConcat <= listOfWords.length; i++) {
    let joinOfWords = listOfWords.slice(i, i + numberOfWordsToConcat).join('')
    if(joinOfWords.length > largestWord.length) largestWord = joinOfWords 
  }

  return largestWord

}

console.log(concatWordsByArray(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))