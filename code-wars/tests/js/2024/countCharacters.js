const count = (string) => {
  const splitString = string?.split('')
  const counter = {}

  splitString?.forEach(letter => {
    counter[letter] ? counter[letter]++ : counter[letter] = 1 
  })

  return counter
}

count('aba')