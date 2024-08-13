const accum = (text) => {
  const splitLetters = text?.toLowerCase()?.split('')
	const repeatLetters = splitLetters?.map((letter, index) => letter?.toUpperCase() + letter?.repeat(index))
  return repeatLetters?.join('-')
}

console.log(accum('ZpglnRxqenU'))