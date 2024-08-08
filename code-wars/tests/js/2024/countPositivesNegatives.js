const countPositivesSumNegatives = (input) => {
  if(!input || !input?.length) return []
  let counter = 0
  const filterNegatives = input?.reduce((prev, current) => {
    const isNegative = current <= 0
    !isNegative && counter++
    return isNegative ? prev + current : prev
  }, 0)

  return [counter, filterNegatives]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))