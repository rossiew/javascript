// //booleans- логически тип данных , true ,false

// //айнымалыны let and const құрамыз 

// //operators    {/*, < > ,<=  >=,==,!=*/}

// console.log(4>3)
// console.log(4<3)
// console.log(4<=3)
// console.log(5>=4)
// console.log(4==4)

// console.log(10/4) //2.5 бөлшек сан қайтарады 
// console.log(13%4)   //1      example:  3.25-> 13 -3*4=1     
// console.log(3**(18%6))


// //     p*r2
// let radius=100
// const PI=3.14
// let result=PI*radius**2
// console.log(result)
// // console.log(PI*radius**2)       // second version
// console.log(`The area of a circle with radius ${radius} is  ${result} m2.`)



// //   gravity*mass
// const gravity=9.8
// let mass=72
// let ressult=gravity*mass
// console.log(ressult)
// console.log(`The weight of a person who weights ${mass} kg is  ${ressult}N`)



// //example in chemistry

// //with faranheit
// let  temp=20 //temp*5.9+32
// let resultt=temp*9/5+32
// console.log(`${temp} in Celsius is ${resultt} in Faranheit  `)


// //with calvin
// let tempp=20
// let reesult=temp+273.15
// console.log(`${temp} in Celsius is ${reesult} in Calvin `)




// //Home work 

// //task 1    Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName ='Roza'
// let lastName ='Temirbai'
// let country='Kazakhstan'
// let city='Almaty'
// let age=17
// let isMarried=false
// let year=2023

// console.log("firstName: " +typeof firstName)   // firstName: string
// console.log("lastName: " +typeof lastName)     // lastName: string
// console.log("country: " +typeof country)       // country: string
// console.log("city: " +typeof city)             // city: string
// console.log("age: " +typeof age)               // age: number
// console.log("isMarried: " +typeof isMarried)   // isMarried: boolean
// console.log("year: " +typeof year)             // year: number



// //task 2   Check if type of '10' is equal to 10

// console.log('10' == 10)   //true


// //task 3   Check if parseInt('9.8') is equal to 10

// console.log('9.8'==10)   //false


// //task 4    Boolean value is either true or false.

//  //i Write three JavaScript statement which provide truthy value.
// console.log( 897 % 4*7 < 123*45 )
// console.log(undefined==null)
// console.log('space'.length !='script'.length)


// // ii Write three JavaScript statement which provide falsy value.
// console.log('boolean'==false) 
// console.log('number'=='boolean')
// console.log('const'=='let')


// //task 5  Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// let num1=  4 > 3
// console.log(num1)

// let num2=4 >= 3
// console.log(num2)

// let num3 = 4 < 3
// console.log(num3)

// let num4 = 4 <= 3
// console.log(num4)

// let num5= 4 == 4 
// console.log(num5)

// let num6= 4 === 4
// console.log(num6)

// let num7 = 4 != 4
// console.log(num7)

// let num8= 4 !== 4
// console.log(num8)

// let num9= 4 != '4'
// console.log(num9)

// let num10= 4 == '4'
// console.log(num10)

// let num11= 4 === '4'
// console.log(num11)



// // xii Find the length of python and jargon and make a falsy comparison statement.

// console.log('python'.length !='jargon'.length) //false


// //task 6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


// let numb1=  4 > 3 && 10 < 12
// console.log(numb1)

// let numb2= 4 > 3 && 10 > 12
// console.log(numb2)

// let numb3 = 4 > 3 || 10 < 12
// console.log(numb3)

// let numb4 =  4 > 3 || 10 > 12
// console.log(numb4)

// let numb5= (4 > 3)
// console.log(numb5)

// let numb6 = (4 < 3)
// console.log(numb6)

// let numb7 = (false)
// console.log(numb7)

// let numb8= (4 > 3 && 10 < 12)
// console.log(numb8)

// let numb9= (4 > 3 && 10 > 12)
// console.log(numb9)

// let numb10= (4 === '4')
// console.log(numb10)





//lesson part 2

// let x =5

// x+=1//6
// x+=6//12
// x+18//30


// let y = 9
// x+= y //x=39
// y+=x //y=48
// x*=2 //78
// x-=y=2 //
 


// jx**=0.5 //санның 0,5 дәрежесі санның түбіріне тең



// //=== типін тексереді  .мәнін тексереді 
// //== тек мәнін тексереді
// //NaN-number type. not the number 
// console.log(typeof undefined)
// //example
// let someVariable
// console.log(someVariable)

// //0 басқа барлық сан эквивалиентті  0=false
// console.log(2==true)
// console.log(-2== true) //false 


//we can do this 
// if (0){
//     console.log('positive truthly')
// }

// if (" "){
//     console.log('positive truthly')
// } else{
//     console .log("falsy")
// }


//   &&- and /  барлығы true болу керек , бір фолс болса барлығы фолс болады
//   ||-or/ if we has one true in 9 false -its equal to true
//   !- not equal,not    /  true to false ,false to true. nagation приортеті көп, сосын and , сосын or


//34%5 = 5  34 ішінде 6 рет бар ,сонда 34-30=4
 //true&& true|| false && true 
 




//pre-decrement-1


// let x=7
// --x;//x-=1
//  console.log(x)//6


//pre-increamen +1
//  ++x;//x+=1
//  console.log(x)//7


 //Post-increament
//бірінші мәні өзгеріп , амал орындалады


//post-increamnt ,post-decrement=амалдан кейін  орындалады, pre -increment,pre-decrement=амалға дейін орындалады .

//тернарный оператор ? :






//Home work 

//task 1

// let A = true;
// let B = false;
// let C = false;


// let resultAorB = A || B;
// let resultAandB = A && B;
// let resultBorC = B || C;

// console.log("A or B:", resultAorB);   // true
// console.log("A and B:", resultAandB);  //  false
// console.log("B or C:", resultBorC);    //  false



// //task 2
// let X = false
// let Y = true
// let Z = false

// let  resultXorZ= X || Z
// let resultXandY= X && Y
// let resultXandZ= X && Z

// console.log("X or Z:", resultXorZ)     //false
// console.log("X and Y:", resultXandY)   //false
// console.log("X and Z:", resultXandZ)   //false


// //task 3 
// let a = true
// let b = false 
// let c = false

// let resnotAandB= !a && b
// let resAornotB= a || !b 
// let resAandBorC= a && b ||c

// console.log("not A and B ", resnotAandB)   //false
// console.log("A or not B ", resAornotB)     //true
// console.log("A and B or C", resAandBorC)   //false



// //task 4 
// let x=true
// let y= true
// let z = false

// let notXandY= !x && y
// let XornotY= x || !y
// let XorYandZ= x || y && Z

// console.log("not x and y" , notXandY)  //false
// console.log("x or not y", XornotY)     //true
// console.log("x or y and z", XorYandZ)  //true


// task 5
// let A = true
// let B = false
// let C = false

// let AorBnotC= A || B && ! C
// let notAandnotB= !A && !B
// let notAandCorB= !(A && C) || B
// let AandnotBorC= A && !B || C
// let AandNotBorC= A && (!B || C)
// let AornotBandC= A || (!(B && C))

// console.log("a or b not c ", AorBnotC)   //true
// console.log("not a and not b", notAandnotB)   // false
// console.log("not (a and c) or b".notAandCorB)  //undefined
// console.log("a and not b or c", AandnotBorC)   //true
// console.log("a and (not b or c)", AandNotBorC)  //true
// console.log("a or (not(b and c))", AornotBandC)  //true


// task 6
// let X= false
// let Y=false
// let Z= true

// //a
// let XorYandnotZ= X || Y && ! Z
// console.log("X or Y and not Z",  XorYandnotZ)  //false

// //b
// let notXandnotY= !X && !Y
// console.log( "not X and not Y"  ,notXandnotY)  //true

// //c
// let notXandZorY= !X && Z ||Y
// console.log("not (X and Z) or Y",  notXandZorY)  //true

// //d
// let XandnotYorZ= X && !Y ||Z
// console.log( " X and not Y or Z",XandnotYorZ) //true

// //e
// let XandNotYorZ= X && (!Y || Z)
// console.log("X and (not Y or Z)", XandNotYorZ) //false

// //f
// let XorNotYorZ= X ||(!(Y ||Z))
// console.log(" X or (not (Y or Z)) ", XorNotYorZ) //false



// //task 7  
// let A=true
// let B=false
// let C=false

// //a
// let AornotAandBorC= A || ! (A && B) || C
// console.log(" A or not (A and B) or C ", AornotAandBorC)  //true

// //b 
// let notAorAandBorC= !A || A &&(B || C)
// console.log("not A or A and (B or C) ", notAorAandBorC)  //false

// //c
// let AorBandnotCandC= (A ||B && !C) && C
// console.log(" (A or B and not C) and C", AorBandnotCandC) //false


// //task 8  X = False, Y = True, Z = False:
// let X = false
// let Y = true
// let Z = false

// //a) 
// let XandnotZorYornotZ= X && !(Z || Y) ||!Z
// console.log("X and not (Z or Y) or not Z" ,XandnotZorYornotZ) //true

// // b)  
// let notXorXandYorZ= !X || X && (Y || Z)
// console.log("not X or X and (Y or Z) " ,notXorXandYorZ ) // true

// // c) 
// let XorYandnotZandZ= (X || Y && ! Z) && Z
// console.log("(X or Y and not Z) and Z ", XorYandnotZandZ  ) // false


// //task 9
// let X= true
// let Y =false
// let Z = false

// //a)
// let num1= !X || !Y || !Z
// console.log("not X or not Y or not Z ",num1) //true

// // b) 
// let num2= (! X || ! Y) && (X || Y)
// console.log("(not X or not Y) and (X or Y)",num2)  // true

// // c) 
// let num3= X && Y || X && Z || ! Z
// console.log(" X and Y or X and Z or not Z",num3) //true


// //task 10 
// let A = false
// let B = false

// let C = true

// // a) 
// let num4=(!A || !B) && !C
// console.log("(not A or not B) and not C",num4) //false

// // b) 
// let num5= (!A ||!B)&&(A || B)
// console.log("(not A or not B) and (A or B) ", num5) //false

// // c) 
// let num6= A && B || A && C || !C
// console.log("A and B or A and C or not C ",num6) //false

alert("Hi")// уведомление

// let name = prompt("Enter your name:")

// alert(`Hello ${name}`)

// let age = prompt("Enter your age: ")
// let year= 2023

// alert (`You're in  ${2023- age}`)

//as calculator
// let number = Number(prompt("Enter a num1:"))

// let num2= Number(prompt("Enter a num2: "))

// alert(` ${number}+${num2} = ${number+num2}`)




// let agree= confirm ("Are you sure delete?")
 
// //first method
// agree ? alert("Deleted"): alert("Not deleted")

//second method
// if (agree){
//     alert("Deleted")
// } else{
//     alert("Not deleted")
// }


// let age = confirm ("Are you adult? ")
// age ? alert("You can vote"): alert("You cannot vote")





//home work

//task 1  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 * b * h).

alert("Hi")

let num1 = Number(prompt("Enter base:"))

let num2 = Number(prompt("Enter height:"))

alert(`The area of the triangle is  ${0.5*num1*num2} `)


//task 2   Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let side1 = Number(prompt("Enter side a:"))

let side2 = Number(prompt("Enter side b:"))

let side3 = Number(prompt("Enter side c:")) 

alert(`The perimeter of the triangle is ${side1+side2+side3} `)


//task 3  Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))let length = prompt('Enter length: ');


let length = prompt('Enter length: ');
let width = prompt('Enter width: ');

let arean = length * width;

let perimeter = 2 * ((length) + (width));

alert(arean,perimeter)

 
//task 4  Get radius using prompt and calculate the area of a circle (area = pi * r * r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14

let radius= Number(prompt("Enter a radius:"))
let PI=3.14
let area = PI * radius ** 2;
let circumference = 2 * PI * radius;
alert(area,circumference)


//task 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2

let slope = 2;

let y = -2;

let x = 1;

alert(`Slope(m):`+slope)
alert("Y-Intercept: (" + 0 +  + y + ")")
alert("X-Intercept: (" + x + ", " + 0 + ")")



//task 6  Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slopee=(10-2)/(6-2) 
alert(slopee) //2



//task 7  Compare the slope of above two questions.
//?


//task 8   Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//?



//task 9  Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?


let user=Number(prompt("Enter hours:"))

let rate=Number(prompt("Enter rate per hour:"))

alert(`Your weekly earning is ${user*rate}`)



//task 10  If the length of your name is greater than 7 say, your name is long else say your name is short.

let name=(prompt("Enter your name:"))

if (name.length > 7) {
    alert("Your name is long.");
} else {
    alert("Your name is short.");
}



    
    
    
    