/**
 * Spread => to split the array elements OR object properties
 * ex: 
 * const newArray = [...oldArray, 1, 2]
 * const newObject = {...oldObject, newProp:5}
 */
const numbers = [1, 2, 3]
const person = {
    name : "Anggit"
}

//not using spread
const newArrayWithoutSpread = [numbers, 4]
console.log(newArrayWithoutSpread)
//Output [ [ 1, 2, 3 ], 4 ]

//Using spread
const newArray = [...numbers, 4]
console.log(newArray)
//Output [ 1, 2, 3, 4 ]

//Using spread
const newObj = {
    ...person,
    age: 22
}
console.log(newObj)
//output { name: 'Anggit', age: 22 }s

//without spread
const newObj2 ={
    person,
    age : 22
}
console.log(newObj2)
//output { person: { name: 'Anggit' }, age: 22 }






 /**
  * Rest => to merge a list of function arguments into array
  * ex: 
  * function sortArgs(...args){
  *     return args.sort()
  * }
  */
const filter = (...args) => {
    return args.filter(el => el === 1)
}
console.log(filter(1, 2, 3))
//output [ 1 ]