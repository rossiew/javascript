
//12.12.2023   lesson

// let name  //-its for undefined




// round-жуықтау
console.log(Math.round(3.89))   //4 

console.log(Math.round(3.5))  //4

console.log(Math.round(3.49))  //3



//floor- төмен жақа жуықтау/пол
console.log(Math.round(3.49))  //3
console.log(Math.round(4.99))  //4




//ceil -төбе жақа жуықтау/потолок
console.log(Math.round(3.01))  //4
console.log(Math.round(5.12))  //6




//min/max
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // min number is -5

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // max number is - 20


//for random between 0 to 0.999999
const randNum = Math.random() //only creates random number between 0 to 0.999999
console.log(randNum)



//for needing random numbers
const num = Math.floor(Math.random () * 1001) // creates random number between 0 and 10
console.log(num)


//or


const numbero = Math.ceil(Math.random () * 100) // creates random number between 0 and 10
console.log(num)




//abs-  минус санды плюс қылады ,плюс  санды плюс   қылады./Absolute value

console.log(Math.abs(-10))      // 10




//Square root- түбірін табады мысалы 10 түбірі 5 деген секілді
console.log(Math.sqrt(100))     // 10
console.log(7**0.5)//-түбір табу үшін


// Power-дәреже табу
console.log(Math.pow(3, 2))
console.log(4**47)



//Home work of data types

//task 7    Generate a random number between 0 and 100 inclusively.

const numbers= Math.floor(Math.random()*100)
console.log(numbers)


//task 8   Generate a random number between 50 and 100 inclusively.

const number=Math.floor(Math.random()*(100-50+1))+50
console.log(number)


//task 9 Generate a random number between 0 and 255 inclusively.


const numbeer=Math.floor(Math.random()*(255-0+1))+0
console.log(numbeer)


//level 3 

//task  4   Calculate the total annual income of the person by extracting the numbers from the 
//following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'