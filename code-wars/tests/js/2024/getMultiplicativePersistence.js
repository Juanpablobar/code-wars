const persistence = (number) => {
  let currentNumber = number
  let contador = 0
  while(String(currentNumber)?.length > 1){
    const splitNumber = String(currentNumber)?.split('')
    const multiplyNumbers = splitNumber?.reduce((prev, current) => prev * current)
    currentNumber = multiplyNumbers
    contador++
  }

  return contador
}

console.log(persistence(39))