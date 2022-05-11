const getNumberOfTimesCanMultiplicate = (number) => {

  let timesOfMultiplicate = 0
  number = String(number)

  while(number.length > 1){
    number = number.split('').reduce((a, b) => a * b).toString()
    timesOfMultiplicate++
  }

return timesOfMultiplicate
}

console.log(getNumberOfTimesCanMultiplicate(999))