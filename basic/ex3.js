/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date()
const [year, month, day] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
]

console.log(`${month}-${day}-${year}`)
console.log(`${month}/${day}/${year}`)
console.log(`${day}-${month}-${year}`)
