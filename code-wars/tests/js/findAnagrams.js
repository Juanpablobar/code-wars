const findAnagrams = (anagramToFind, lisOfWords) => {
  const sortAnagram = sortLettersByWords(anagramToFind)
  const sortListOfWords = lisOfWords.map(word => sortLettersByWords(word))

  const getAnagrams = sortListOfWords.map((item, index) => item === sortAnagram && lisOfWords[index]).filter(Boolean)

  return getAnagrams
}

const sortLettersByWords = (words) => {
  return words.split('').sort().join('')
}

// Opciòn mejorada y màs corta

const findAnagrams2 = (anagramToFind, lisOfWords) => {
  const getAnagrams = lisOfWords.filter(item => sortLettersByWords(anagramToFind) === sortLettersByWords(item))
  return getAnagrams
}

console.log(findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

console.log(findAnagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))