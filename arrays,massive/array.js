// //for find length
// let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// console.log(weekdays.length)

// ////
// switch (weekdays.length % 2 == 1) {
//     case true:
//         console.log("There is odd number of days")
//         break

//     default:
//         console.log("There is even number of days")
// }


// switch (++weekdays.length) {
//     case 7:
//         console.log("7 days")
//         break
//     case 8:
//         console.log("8 days")
//         break
//     default:
//         console.log("There is even number of days")
// }




// // split
// console.log(weekdays[0].split()) //["Monday"]
// console.log(weekdays[0].split("")) //["M","o","n","d","a","y"]
// console.log(weekdays[1].split(" ")) //["Tuesday"]
// console.log(weekdays[1].split("e")[1].split("a")) //["sd",'y]   --> ["Tu","sday"]->"sday".split("a") ->["sd","y"]

// //мәнін өзгерту үшін
// weekdays[0]= "Дүйсенбі"
// weekdays[1]= "Сейсенбі"
// weekdays[2]= "Сәрсенбі"
// weekdays[3]= "Бейсенбі"
// weekdays[4]= "Жұма"
// weekdays[5]= "Сенбі"
// weekdays[6]= "Жексенбі"

// weekdays[1]=weekdays[1].toUpperCase()
// weekdays[2]=weekdays[2].toLowerCase

// console.log(weekdays)




// // adding numbers to numbers   -index
// let numbers = [34,45,24,78,12,57]

// numbers[0]=numbers[0]+1
// numbers[1]=numbers[1]+2
// numbers[2]=numbers[2]+3
// numbers[3]=numbers[3]+4
// numbers[4]=numbers[4]+5
// numbers[5]=numbers[5]+6
// console.log(numbers)



///пустой массив бірақ 8 дейн ғана 
// const eightEmptyValues = Array(8).fill("A") 
// console.log(eightEmptyValues.length)
// console.log(eightEmptyValues)

// const fiveEmptyValues = Array(5).fill(1) 
// console.log(fiveEmptyValues.length)
// console.log(fiveEmptyValues)


// const tenEmpty = Array(10).fill(true)
// console.log(tenEmpty.length)
// console.log(tenEmpty)



// const EmptyValues = Array(10).fill("") 
// console.log(EmptyValues.length)
// console.log(EmptyValues)


//concat
// let eightEmptyValues = Array(8).fill("A") 
// let trues=Array(10).fill(true)
// eightEmptyValues=eightEmptyValues.concat(trues)
// trues=trues.concat(eightEmptyValues)
// console.log(eightEmptyValues)
// console.log(trues)



//indexOf


// let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// console.log(weekdays.length)
// console.log(weekdays.indexOf("Tuisday"))   //-1
// console.log(weekdays.indexOf("Friday"))  //сол санның индексін табады 




// let day="Wednesday"

// if (weekdays.indexOf(day)>=0){  //-1 тең емес деп алуға болады
//     console.log("Day is present")
// } else{
//     console.log("NO such day")
// }


// //lastIndexOf
// let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// console.log(weekdays.lastIndexOf("Tuesday"))//last one

// //includes

// if (weekdays.includes(day)){  // true or false 
//     console.log("Day is present")
// } else{
//     console.log("NO such day")
// }










// //Home work 

// //task 1. Declare an empty array;


// let empty= []   //or 
// let empty_array= Array()

// //task 2.   Declare an array with more than 5 number of elements

// let subject= ["math",'PE',"biology","chemestry","history","english","physics"]

// //task 3.   Find the length of your array

// console.log(subject.length)


// //task 4.   Get the first item, the middle item and the last item of the array

// console.log(subject[0],subject[3],subject[6])

// //task 5.  Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// mixedDataTypes=["London",15,true,'black',8.9, null]
// console.log(mixedDataTypes.length)


// //task 6.   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

// let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]

// //task 7.  Print the array using console.log()
// console.log(itCompanies)


// //task 8.   Print the number of companies in the array
// console.log(itCompanies.length)

// //task 9.    Print the first company, middle and last company

// console.log(itCompanies[0],itCompanies[3],itCompanies[6])

// //task 10.   Print out each company

// console.log(
//     itCompanies[0],
//     itCompanies[1],
//     itCompanies[2],
//     itCompanies[3],
//     itCompanies[4],
//     itCompanies[5],
//     itCompanies[6]
// )


// //task 11.  Change each company name to uppercase one by one and print them out

// itCompanies[0]=itCompanies[0].toUpperCase()
// itCompanies[1]=itCompanies[1].toUpperCase()
// itCompanies[2]=itCompanies[2].toUpperCase()
// itCompanies[3]=itCompanies[3].toUpperCase()
// itCompanies[4]=itCompanies[4].toUpperCase()
// itCompanies[5]=itCompanies[5].toUpperCase()
// itCompanies[6]=itCompanies[6].toUpperCase()

// // console.log(itCompanies)

// //task 12.     Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(`${itCompanies} are big IT companies.`)


// //13.         Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// let itCompaniess=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
// let user=prompt("enter a company")

// if (itCompanies.indexOf(user)>=0){
//     console.log("yes")}
// else{
//     console.log("No")
// }  



//Lesson

//join- массивті стрингке айналдырады 

//push -жаңа элементті соңына қосады

//pop- ең соңынан өшіреді 

//shift- ең басынан бір элементті өшіреді

//unshift- ең басына бір элемент қосады--копияны емес өзін өзгертеді

//slice- жартысынан өшіреді ,копировать етеді--копия өзгертеді

//splice -удалить етіп ,ауыстырады--копия өзгертеді



//class works 


//1. Заполнить массив из восьми элементов следующими значениями: первый
//элемент массива равен 37, второй — 0, третий — 50, четвертый — 46, пятый — 34, шестой — 46, седьмой — 0, восьмой —13.

let number= [ ]

number.push(37)
number.push(0)
number.push(50)
number.push(46)
number.push(34)
number.push(46)
number.push(0)
number.push(13)

console.log(number)


//2.  Заполнить массив из десяти элементов значениями, вводимыми с клавиатуры
// в ходе выполнения программы

let lesson= []