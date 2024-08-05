const digitalRoot = (number) => {
  let currentValue = number
  while(currentValue?.toString()?.length > 1){
    const splitNumber = currentValue?.toString()?.split('')
    const addNumbers = splitNumber?.reduce((prev, current) => Number(prev) + Number(current))
    currentValue = addNumbers
  }
  return currentValue
}

console.log(digitalRoot(942))