// high order functions: map e filter

const tags = [
  {id: 1, name: "node", note_id: 1},
  {id: 2, name: "express", note_id: 1},
  {id: 3, name: "react", note_id: 1},
  {id: 4, name: "javascript", note_id: 2},
  {id: 5, name: "frontend", note_id: 2},
]

// .map() function will go through an array and put the items in a var, then you'll be able to separate the items by property, as it is shown in the example
// tag is an assistant variable created in function map. It will contain each element of the array as an object
const newArray = tags.map(tag => {
  return {
    // name: tag.name,  -- catch specifically the names, not the other properties in the element
    ...tag,
    date: new Date()
  }
})
console.log(newArray)
const otherArray = tags.filter(tag => tag.note_id === 1)
console.log(otherArray)