const convertToCamelCase = (text) => {
  const splitingText = text.split(/[-_]/g)
  const upperCaseWords = splitingText.map((word, i) => {
    if(i > 0) return word[0].toUpperCase() + word.slice(1)
    return word
  })
  return upperCaseWords.join('')
}

// Otra solución más corta

const convertToCamelCaseShort = (text) => {
  return text.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


  console.log(convertToCamelCase("the-stealth-warrior"))
  console.log(convertToCamelCaseShort("the-stealth-warrior"))