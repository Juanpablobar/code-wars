const compareTheTriplets = (firstTriplet, secondTriplet) => {

  let firstValue = 0
  let secondValue = 0

  for (let i = 0; i < firstTriplet.length; i++) {
    firstTriplet[i] > secondTriplet[i] && firstValue++
    firstTriplet[i] < secondTriplet[i] &&  secondValue++
  }

  return [firstValue, secondValue]
  
}

console.log(compareTheTriplets([ 5, 6, 7 ], [ 3, 6, 10 ]))