const narcissistic = (value) => {
  const splittingNumber = value?.toString()?.split('')
  const raisedNumbers = splittingNumber?.map(number => Math.pow(number, splittingNumber?.length))
  const addingNumbers = raisedNumbers?.reduce((prev, current) => prev + current)
  return addingNumbers === value
}

narcissistic(153)