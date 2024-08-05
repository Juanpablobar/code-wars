const high = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const splitText = text?.split(' ')

  const getScorings = splitText?.map(word => {
    const splitWord = word?.split('')
    const getValues = splitWord?.map(letter => alphabet?.findIndex(element =>  element === letter) + 1)
    const addValues = getValues?.reduce((prev, current) => prev + current)
    return addValues
  })
  const getMaxValue = Math.max(...getScorings)
  const findValue = getScorings?.findIndex(score => score === getMaxValue)

  return splitText[findValue]
}

console.log(high('aa b'))