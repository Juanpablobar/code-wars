const findAverage = (numbers) => {
  if(numbers?.length < 1) return 0
  return numbers?.reduce((prev, current) => prev + current, 0) / numbers?.length
}

console.log(findAverage([]))