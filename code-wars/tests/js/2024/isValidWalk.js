const isValidWalk = (walk) => {
  if(walk?.length !== 10) return false
  let vertical = 0
  let horizontal = 0
  walk?.forEach(direction => {
    direction === 'n' && vertical++
    direction === 's' && vertical--
    direction === 'w' && horizontal++
    direction === 'e' && horizontal--
  })

  return vertical === 0 && horizontal === 0
}

isValidWalk(['n','n','n','s','n','s','n','s','n','s'])