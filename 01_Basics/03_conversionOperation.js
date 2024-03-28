let score="33abc"
let score1= null
let score2;
let score3=true
let score4="33"
console.log(typeof score)  // string
console.log(typeof (score)) // string

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)

console.log(typeof valueInNumber)  // number
console.log(valueInNumber) //Nan- NotAnNumber
console.log(valueInNumber1) //0
console.log(valueInNumber2) //Nan
console.log(valueInNumber3) //1 for true 0 for false
console.log(typeof valueInNumber4) //number

let isLoggedIn=1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) // boolean

// 1=>true ; 0+=>false
//"" => false
//"anything" =>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) // 33
console.log(typeof stringNumber) // string



