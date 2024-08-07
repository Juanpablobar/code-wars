const friend = (friends) => friends?.filter(friend => friend?.length === 4)

console.log(friend(["Ryan ef", "Kieran", "Marks"]))