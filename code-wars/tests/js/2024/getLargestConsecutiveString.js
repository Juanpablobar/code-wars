const longestConsec = (strings, consecutive) => {
  if(consecutive < 1 || consecutive > strings?.length) return ''
  let largestString = ''
  for(let i = 0; i < strings?.length; i++){
    const selectStrings = strings?.slice(i, i + consecutive)?.join('')
    if(selectStrings?.length > largestString?.length) largestString = selectStrings
  }

  return largestString
}

console.log(longestConsec([], 3))