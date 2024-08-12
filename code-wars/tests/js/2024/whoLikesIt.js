const likes = (names) => {
  let text = 'no one likes this'
  switch (true){
    case names?.length === 1 :
      text = `${names[0]} likes this`
    break
    case names?.length === 2 :
      text = `${names[0]} and ${names[1]} like this`
    break
    case names?.length === 3 :
      text = `${names[0]}, ${names[1]} and ${names[2]} like this`
    break
    case names?.length > 3 :
      const others = names?.length - 2
      text = `${names[0]}, ${names[1]} and ${others} others like this`
    break
  }
  return text
}

console.log(likes(['Alex']))