
// //its integer
// let grade = 4

// switch (grade) {
//     case 2:
//         console.log("Very bad ")
//         break
//     case 3:
//         console.log("Satisfying")
//         break
//     case 4:
//         console.log("Good")
//         break
//     case 5:
//         console.log("very good")
//         break
//     default:
//         console.log("Invalid grade")
// }





// //its string

// let city = "Astana"
// switch (city) {    //city.length-- сан шығарады  //city([0]) -- кез келген  әріп шығарады 
//     case "Astana":
//     case "Almaty":
//     case "Shymkent":
//     default:
// }



// let citty = "Astana"
// switch (citty[0]) {
//     case "A":
//     case "B":
//     case "C":
//     default:
//         console.log("Error")
// }


// let number = prompt("enter a number: ")
// switch (number ==0){
//     case true:
//         console.log("The number is zero")
//         break
//     default:
//         switch(number<0){
//             case true:
//                 console.log("the number is negative")
//                 break
//             default:
//                 switch(number% 2 ){
//                     case 0:
//                         console.log("Even number ")
//                         break
//             default:
//                 console.log("Odd number ")
//                 }
//         }    
// }




//4.37
// let user=+(prompt("Enter a number "))
// if (user > -5 && user < 3){
//     console.log("goood")
// }
// else{
//     ("bad")
// }


//y үлкен 2            х 3 көп
//

// //a
// let x=+(prompt("enter x: "))
// let y=+(prompt("enter y: "))

// if (x>=3 && y >= 2){
//     console.log("попадает в область ")
// }
// else{
//     console.log("не попадает в область")
// }

// //b
// let x=+(prompt("enter x: "))
// let y=+(prompt("enter y: "))

// if (x<=-2 && y <=-4){
//     console.log("попадает в область")
// }
// else{
//     console.log("не попадает в область")
// }






//Home work

//Level 1

//task 1
// let age=Number(prompt("Enter your age:"))
// switch(age>=18){
//     case true:
//         console.log("You are old enough to drive.")
//         break
//     default:
//         console.log(`You are left with ${18-age} to drive.`)    
//   }


// //task 2
// let yourAge = +(prompt("Enter your age :"))
// let myAge = 17
// switch (yourAge >= 17) {
//     case true:
//         console.log(`You are ${yourAge - 17} years older than me`)
//         break
//     default:
//         console.log(`I am older ${17 - yourAge} years than you`)
// }



// //task 3
// let user1 = +(prompt("enter A:"))
// let user2 = +(prompt("enter B:"))

// switch (user1 >= user2) {
//     case true:
//         console.log(`${user1} big than ${user2}`)
//         break
//     case user2 >= user1:
//         console.log(`${user2} greater than ${user1}`)
//         break
//     default:
//         console.log("Here is error")
// }



// //task 4
// let number = +(prompt("Enter a number: "))
// switch (number % 2 != 1) {
//     case true:
//         console.log(`${number} is a even number`)
//         break
//     default:
//         console.log(`${number} is odd number`)
// }




// //LEVEL 2
// //task 1

let student = +(prompt("Enter your scores:"))
switch ( student >= 80 && student <= 100) {
    case true:
        console.log("A")
        break
    case student >= 70 && student <= 79:
        console.log("B")
        break
    case student >= 60 && student <= 69:
        console.log("C")
        break
    case student >= 50 && student <= 59:
        console.log("D")
        break
    case student >= 0 && student <= 49:
        console.log("F")
        break
    default:
        console.log("Error")
}



// // //task 2
// let month = prompt("Enter the month:");
// switch (month.toString()) {
//     case "september":
//     case "october":
//     case "november":
//         console.log("The season is Autumn.");
//         break;
//     case "december":
//     case "january":
//     case "february":
//         console.log("The season is Winter.");
//         break;
//     case "march":
//     case "april":
//     case "may":
//         console.log("The season is Spring.");
//         break;
//     case "june":
//     case "july":
//     case "august":
//         console.log("The season is Summer.");
//         break;
//     default:
//         console.log("none");
// }




// //task 3

// let day =prompt("What is the day today? ")
// switch(day.toString()){
//     case "Saturday":
//     case" saturDaY":
//     case "saturday":
//         console.log("Saturday is weekend")
//         break
//     case "Friday":
//     case "FrIDAy":
//     case "friday":
//         console.log("Friday is a working day")
//         break
//     default:
//         console.log("Its working day")
//     }




// //LEVEL 3
let month_day = prompt("Enter a month: ")
switch (month_day) {
    case "January":
    case "JANUARY":
        console.log("January has 31 days.")
        break
    case "February":
    case "FEbruary":
        console.log("February has 28 days.")
        break
    default:
        console.log("Its other month")
}