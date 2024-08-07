const past = (hours, minutes, seconds) => {
  const secondToMiliseconds = seconds * 1000
  const minutesToMiliseconds = minutes * 60 * 1000
  const hoursToMiliseconds = hours * 60 * 60 * 1000

  return secondToMiliseconds + minutesToMiliseconds + hoursToMiliseconds
}

console.log(past(1, 1, 1))