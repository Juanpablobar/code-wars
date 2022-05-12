const getLastDigitOfPotencialization = (number1, number2) => {

  if(number1 ** number2 == 'Infinity') return 6

  const a = String(number1 ** number2)

  return Number(a.charAt(a.length - 1))
}

console.log(getLastDigitOfPotencialization("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))