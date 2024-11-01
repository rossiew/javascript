// function sum(){
//     console.log(4+5)
// }
// sum()   //function-ды шақыру 



// //argument
// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(789,345) 





// function subtract(nume1,nume2){
//     console.log(nume1-nume2)
// }
// subtract()



// function multiply(numb1,numb2){
//     console.log(numb1*numb2)
// }
// multiply()



// function divide(number1,number2){
//     console.log(number1/number2)
// }
// divide()



// function square(num){
//     console.log(num**2)
// }
// square(2)


// function cub(num1){
//     console.log(num1**3)
// }
// cub(2)




// function number(numb){
//     if(numb%2==0){
//         console.log("Even ")
//     }
//     else{
//         console.log("Odd")
//     }
// }

// number(5)
// number(68)




//with ternary operator
// function evenorOdd(number) {
//     number % 2 == 0   ? console.log("even")  : console.log("odd")
// }
// evenorOdd(5)
// evenorOdd(68)



// ternary operator into  the console
// function evenorOdd(number) {
//     console.log(number % 2 == 0 ? "even" : ("odd"))
// }
// evenorOdd(5)
// evenorOdd(68)





// function degree(number,degree){
// console.log(number**degree)
// }
// degree(4,6)








//home work

//1

// function fullname(){

//     console.log(fullname)
// }
// fullname()


//2

// function fullname() {
//     let firstname = 'Roza'
//     let lastName = 'Temirbay'
//     console.log(firstname + ' ' + lastName)
// }
// fullname()   //Roza Temirbay




// //3

// function addNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// addNumbers(23, 44)    //67


// //4  

// function areaOfRectangle(length, width) {
//     console.log(`area`, length * width)
// }
// areaOfRectangle(23, 99)  //2277



// //5   

// function perimeterOfRectangle(length, width) {
//     console.log(2 * (length + width))
// }
// perimeterOfRectangle(33, 54)   //174


// //6   

// function volumeOfRectPrism(length, width, height) {
//     console.log(length * width * height)
// }
// volumeOfRectPrism(22, 13, 2) //572


// //7   
// function areaOfCircle(π, r, r) {
//     console.log(π * r * r)
// }
// areaOfCircle(2, 44, 3)  //18


// //8  

// function circumOfCircle(π, r) {
//     console.log(2 * π * r)
// }
// circumOfCircle(23, 44) //2024


// //9   

// function density(mass, volume) {
//     console.log(mass / volume)
// }
// density(186, 12)  //15.5


// //10


// function speed(distance, time) {
//     console.log(distance / time)
// }
// speed(140, 3)  //46.6666









// //Lesson 16.01.2024

// //11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// function substance(mass, gravity) {
//     console.log(mass * gravity)
// }
// substance(12, 53)


// //12    Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(oC, oF) {
//     console.log(oF = (oC * 9 / 5) + 32)
// }
// convertCelsiusToFahrenheit(34, 22)


// //13  bmi = weight in Kg / (height x height) in m2

// function bmi() {
//     let weight = 55
//     let height = 166
//     let bodyMass = weight / (height * height)

//     if (bodyMass >= 18.5) {
//         console.log('underweight')
//     }
//     else if (18.5 < bodyMass > 24.9) {
//         console.log('normal weght')
//     }
//     else if (25 < bodyMass > 29.9) {
//         console.log('overweight')
//     }
//     else {
//         console.log('obese')
//     }
// }
// bodyMass()

//return

//sum with return
// function sum(num1, num2) {
//     return (num1 + num2)
// }
// console.log(sum(60, 40))


//divide with return
// function divide(num1, num2) {
//     return (num1 / num2)
// }
// console.log(divide(60, 40))


// //multiply with return
// function multiply(num1, num2) {
//     return (num1 * num2)
// }
// console.log(multiply())


// // other tasks 
// let result = divide(sum(534, 678), multiply(456, 12))
// console.log(result)



// //subtract with return
// function subtract(num1, num2) {
//     return (num1 - num2)
// }
// console.log(subtract(22, 10))


//other tasks
// let result2 = multiply(subtract(12, 56), sum(57, 7))
// let result3 = divide(sum(45, 9), subtract(34, 21))
// result = sum(result2, result3)
// console.log(result)




// function doubledSum(num1, num2) {
//     return multiply(sum(num1, num2), 2)
// }
// console.log(doubledSum(10, 20))





// function tripleDivide(num1, num2) {
//     return divide(subtract(num1, num2), 3)
// }
// console.log(tripleDivide(30, 3))


//14  Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(monthNumber) {
//     if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
//         return 'winter'
//     }
//     else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {
//         return 'spring'
//     }
//     else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8)
//         return 'summer'
//     else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {
//         return 'autumn'
//     }
//     else {
//         return "Error"
//     }

// }
// console.log(checkSeason(290))




// function calculateAge(day, month, year) {
//     let birthday = new Date(year, month - 1, day)
//     let now = new Date()
//     let years = (now.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365)
//     return years;
// }
// console.log(calculateAge(13, 3, 2006))





//Home work

//level 2


// //1     
// function solveLinEquation(a, x, b, y, c) {
//     return sum(multiply(a, x), sum(multiply(b, y), c));
// }
// console.log(solveLinEquation(2, 3, 4, 5, 123))

// // //2 

// // function solveQuadEquation(a, x, b, c) {
// //     return sum(multiply((a, x), x), multiply(b, x), sum(c))
// // }
// // console.log(solveQuadEquation(1, 7, 12))


// // //3

// // function printArray(printss) {
// //     for (let i = 0; i < printss.length; i++) {
// //         console.log(printss[i]);
// //     }
// //     return printss;
// // }
// // let numbers = [1, 2, 3, 4, 5];
// // let numbersResult = printArray(numbers);

// // console.log(numbersResult);




// // //4 

// // function showDateTime() {
// //     let now = new Date();
// //     let year = now.getFullYear();
// //     let month = (now.getMonth() + 1);
// //     let day = now.getDate();
// //     let hours = now.getHours();
// //     let minutes = now.getMinutes();
// //     return (`${day}/${month}/${year} ${hours}:${minutes}`);
// // }
// // console.log(showDateTime());



// // //15
// // function generateRandomUserIp() {
// //     let randomIP = () => Math.floor(Math.random() * 255);       //число 255 используется, потому что оно представляет максимальное значение для каждого октета в IPv4-адресе. 
// //     return `${randomIP()}.${randomIP()}.${randomIP()}.${randomIP()}`;
// // }

// // let randomUserIp = generateRandomUserIp();
// // console.log(randomUserIp);










// //17.01.2024

// //work with mistake hw

// //2
// // function solvein(a, b, c) {
// //     let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
// //     let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
// //     return [x1, x2]
// // }
// // console.log(solvein())



// //3

// // function prArray(arr) {
// //     for (let i = 0; i < arr.length; i++) {     //кері айналдыру  for(let i=arr.length-1;i>=0;i--)
// //         console.log(arr[i])
// //     }
// // }




// //екі санның қосындысын қайтарады


// // //classic function
// // function  sum(num1,num2){
// //     return num1+num2
// // }




// //function expression

// // const sum = function(num1,num2){
// //     return num1+num2
// // }
// // // console.log(sum(12,2))


// // const multiply= function(num3,num4){
// //     return num3*num4
// // }
// // console.log(multiply(4,5))




// //arrow function


// const multiply = (num3, num4) => {
//     return num3 * num4
// }



// const sum = (num1, num2) => {
//     return num1 + num2
// }
// // console.log(sum(22,11))


// // let   divide=(num3,num4) =>{
// //     return num3/num4
// // }
// // console.log(divide(22,11))





// //45/5+7*4
// let divide = (num1, num2) => {

//     return num1 / num2
// }
// console.log(sum(divide(45, 5), multiply(7, 4)))
















//Home work
//level 2

//task 7  Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

//arrow function
// let capitalizeArray = (capitalizedarray) => {
//     for (let i = 0; i < capitalizedarray.length; i++) {
//         return capitalizedarray.toUpperCase()
//     }
// }
// console.log(capitalizeArray('milk,red,pineapple'))


//function expression  
// let capitalizeArray=function(capitalizedarray){
//     for (let i = 0; i < capitalizedarray.length; i++) {
//         return capitalizedarray.toUpperCase()
//     } 
// }
//  console.log(capitalizeArray('greek,cheese,home'))



//task 8  Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

//arrow function
// let addItem=(items)=>{
//     let new_array=[]
//     new_array.push(items)
//     return new_array
// }
// console.log(addItem('soft,real'))


//function expression
// let addItem=function(items){
//     let new_array=[]
//     new_array.push(items)
//     return new_array
// }
// console.log(addItem('black,green'))



//task 9  Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

//function expression
// let removeItem=function(removed){
//     let array=[1,8,9,4,5,6]
//     if(removed>=0 && removed<array.length){
//         array.splice(removed,3)
//     }
//     return array
// }
// let ressult=removeItem(3)
// console.log(ressult)


//arrow function
// let removeItem=(removed)=>{
//     let array=[1,8,9,4,5,6]
//     if(removed>=0 && removed<array.length){
//         array.splice(removed,3)
//     }
//     return array
// }
// let ressult=removeItem(3)
// console.log(ressult)





// //Қосымша есеп


// //100 дейнгі жұп сандарды шығару 
// for (let i = 0; i < 100; i += 2) {
//     console.log(i + 2)
// }






// //lesson 18.01.2024




// //массив ішіндегі элементтерді қосады
// const sum = (...nums) => {
//     let sum = 0
//     for (let num of nums) {    //for of -тек массивпен жұмыс жасайды
//         sum += num
//     }
//     return sum
// }
// console.log(sum(1, 2, 3, 34))




// //массив қайтару  toUpperCase()
// function capitalize(...sities) {
//     let capitals = []
//     for (let i = 0; i < sities.length; i++) {
//         capitals.push(sities[i].toUpperCase())
//     }
//     return capitals
// }

// console.log(capitalize("Almaty", "Astana", "Shymkent"))






//sum taby 
//количествасына бөлу
//ортақ мәнін табу

// let average = (...numbers) => {
//     let san = 0
//     for (let i = 0; i < numbers.length; i++) {
//         san += numbers[i]
//     }
//     return san / numbers.length
// }

// console.log(average(1, 2, 3, 4, 5))




// let max = (...numbers) => {
//     if(numbers.length==0){
//         return -1;
//     }
//     let maxNumber = numbers[0]
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber); {
//             maxNumber = numbers[i]
//         }
//     }
//     return maxNumber;
// }

// console.log(max(1, 2, 3, 4, 5))



// //default function/parametr
// function greet(firstname, lastName = 'messi') {
//     return `hello,${firstname} ${lastName}`
// }
// console.log(greet('leo'))
// console.log('kylian')



// function sum (num1,num2 = 0){   //бір сан ғана берілсе 0+2 пример 0-ға санды қосады
//     return num1+num2
// }
// console.log(sum(1,2))
// console.log(sum(2))



// // function cityInfo(one,two="Almaty"){
// //     return `I'm ${one}. I live in ${two}`
// // }
// // console.log(cityInfo('Islam',"Astana"))
// console.log(cityInfo('Islam'))













// //function test  

// //1  Write a function that takes two numbers and returns a tripled sum of them.

// function sum(number1, number2) {
//     return number1 + number2
// }
// console.log(sum(22, 3))


//2 Write a function that takes name and surname as arguments and return a string in the following format:'Hello,Surname Name'

function fullname(surname, name) {
    return `Hello,${surname}  ${name}`
}
console.log(fullname(`Temirbay`, `Roza`))



//3   Write a function that takes an array of numbers and returns the sum of even numbers.

function sumOfEvenNumbers(numbers) {
    let evenSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenSum += numbers[i];
        }
    }
    return evenSum;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = sumOfEvenNumbers(numbersArray);
// console.log(` ${result}`);




//4  Write a function that takes an array of strings and returns an array of the strings that start with an ‘H’.

function starts(words) {
    let empty_box = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].charAt(0).toUpperCase() === 'H') {
            empty_box.push(words[i])
        }
    }
    return empty_box

}
let examples = ['Hello', "Apple", "Grape", "Height", 'Space']
let resultt = starts(examples)
console.log(resultt)




//5 Write a function that takes an array of booleans and returns an array that contains converted values, 1 for true and 0 for falsy values.

function blns(arrays) {
    let emppty = []
    for (let i = 0; i < arrays.length; i++) {

        let reshenie = arrays[i] ? 1 : 0

        emppty.push(reshenie)
    }
    return emppty
}
let arrays = [true, false, true, true, false]
let rest = blns(arrays)
console.log(rest)



//6   Write a function that has two arguments, name and country, and return a string in the following pattern: ‘Hello! I’m Name and I live in Country.’. If the country argument is not passed, the function should put ‘Kazakhstan’ as a default value. 


function personInfo(name,country='Kazakhstan'){
    return `Hello! I'm ${name}. I live in  ${country}`
}
console.log(personInfo('Roza'))


//7

function sttring(...joining){
    let  empty_array=joining.join(' ')
return empty_array
}
let worrd=sttring('Hello', "Apple", "Grape", "Height", 'Space')
console.log(worrd)