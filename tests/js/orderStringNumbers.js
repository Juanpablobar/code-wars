const orderWordsByNumbers = (text) => {
  const separateStringWords = text.split(' ')
  const newOrderOfWords = []
  
  separateStringWords.forEach((word, i) => {
    const foundNumber = word.match(/\d/g)[0] - 1
    separateStringWords.splice(i, 1)
    separateStringWords.splice(foundNumber, 0, word)
  });
  
  return separateStringWords.join(' ')
}

console.log(orderWordsByNumbers("4of Fo1r pe6ople g3ood th5e the2"))