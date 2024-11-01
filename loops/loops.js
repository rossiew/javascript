// for (let i=0; i<10;i++){
//     console.log(i)
// }



// for (let j=10; j<21;j++){
//     console.log(j)
// }



//or

// for (let j=10; j<=20;j++){
//     console.log(j)
// }



// for (let j=20; j>=10;j--){
//     console.log(j)
// }


//or
//  for (let j=50; j>=40;j--){
//       console.log(j)
//      }

//
//  for (let j=0; j<=100;j+=2){
//          console.log(j)
//      }

// for (let j = 0; j <= 100; j += 4) {
//     console.log(j)
// }

// let sum = 0
// for (let j = 1; j <= 100; j+=3) {
//     sum += (j+1)
// }

// console.log(sum)





//or
// let sum = 0
// for (let j = 1; j <= 100; j+=3) {
//     sum += (j+1)
// }

// console.log(sum)











// //home work

// //1
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// //while
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// //2
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


// //while
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }


// //3
// let n = 10;

// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// //4

// for (let i = 1; i <= 7; i++) {
//     let m = '';
//     for (let j = 1; j <= i; j++) {
//         m += '#';
//     }
//     console.log(m);
// }


// //5
// for (let i = 0; i <= 10; i++) {
//     let result = i * i;
//     console.log(`${i} x ${i} = ${result}`);
// }


// //6?

// //7
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }


// //8
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }


// //9 ?


// //10

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// console.log("The sum of all numbers from 0 to 100 is:", sum);


// //11

// let even = 0;
// let odds = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         even += i;
//     } else {
//         odds += i;
//     }
// }

// console.log("The sum of all evens from 0 to 100 is:", even);
// console.log("The sum of all odds from 0 to 100 is:", odds);






//Lesson 09.01.2024

//еселеу
// for(let i=0; i<=10 ;i++ ){
//     console.log(i*2)
// }

// //2  as  piramida
// for (let i = 1; i <= 7; i++) {
//     console.log("#".repeat(i))
// }


// //kobeuty keste 10

// for (let i = 0; i <= 10; i++){
//     console.log(`${i} x ${i} = ${i*i}`)
// }


// kwadrat and kub  11
// console.log("i  i^2  i^3")
// for (let i = 0; i <= 10; i++){
//     console.log(`${i}  ${i**2}  ${i**3}`)
// }




// //12 task
// let even = 0;
// let odds = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         even += i;
//     } else {
//         odds += i;
//     }
// }
// console.log([even,odds])



//массивтің ішіндегі сандарды қосу
// let numbers = [15, 34, 12, 78, 45]
// let sum = 0
// for (let i = 0; i <= 4; i++) {
//     sum += numbers[i]
// }
// console.log(sum)




// //sum+=numbers[2] индекспен жазу

// //esep

// // let numbers = [15, 34, 12, 78, 45]
// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(3*numbers[i])
// // }



// // //even numbers
// // let numbers = [15, 34, 12, 78, 45]
// // for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] % 2 == 0) {
// //         console.log(numbers[i])
// //     } 
// // }


// //odd
// // let numbers = [15, 34, 12, 78, 45]
// // for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] % 2 == 1) {
// //         console.log(numbers[i])
// //     } 
// // }

// //even*2 ,odd*3
// //with ternory
// // let numbers = [15, 34, 12, 78, 45]
// // for (let i = 0; i < numbers.length; i++ ){
// // numbers[i] % 2 == 0 ?
// //  console.log(2 * numbers[i]) : console.log(3 * numbers[i])
// // }


// //with if ,else
// // let numbers = [15, 34, 12, 78, 45]
// // for (let i = 0; i < numbers.length; i++) {
// //     if (numbers[i] % 2 == 0) {
// //         console.log(2 * numbers[i])
// //     } else {
// //         console.log(3 * numbers[i])
// //     }
// // }


// //add random numbers
// // let randomNumbers=[]
// // for(let i= 1 ; i<=5 ;i++){
// //     randomNumbers.push(i*i)
// // }
// // console.log(randomNumbers)




// // let randomNumbers=[]
// // for(let i= 0 ; i<5 ;i++){
// //     randomNumbers.push(Math.round(Math.random()*100))
// // }
// // console.log(randomNumbers)



// //Math.round(Math.random()*100)


//70-100
//Math.random()*30+70












// //Home work

// //task `15
// // let  passlength = 6;
// // let  character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// // let password = '';
// // for (let i = 0; i < passlength; i++) {
// //     let  randoms = character[Math.floor(Math.random() * character.length)];
// //     password += randoms;
// // }
// // console.log( password);





// //Level 2 

// //task 1

// let  passlength = 10;
// let  character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let password = '';
// for (let i = 0; i < passlength; i++) {
//     let  randoms = character[Math.floor(Math.random() * character.length)];
//     password += randoms;
// }
// console.log( password);




// //task 2
// // let length = 6; 
// // let HexNumber = '#';
// // for (let i = 0; i < length; i++) {
// //     let  randoms = Math.floor(Math.random() * 16)
// //     HexNumber += randoms;
// // }
// // console.log( HexNumber);





// //task 3

// // let red=(Math.floor(Math.random( ) *256))
// // let green=(Math.floor(Math.random( ) *256))
// // let blue=(Math.floor(Math.random( ) *256))

// // console.log(`rgb (${red} ${green} ${blue})`)


//with for
// let rgb = []
// for (let i = 0; i < 3; i++) {
//     let randomValue = Math.round(Math.random() * 255)
//     rgb.push(randomValue)
// }
// console.log(rgb)


// //task 4


// let countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// let new_countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// countries=countries.concat(new_countries)
// console.log(new_countries)


// //task 5

//mistake
// console.log(new_countries[0], new_countries[0].length

// )

// console.log(new_countries)


// //task 6   mistakesss
// new_countries[1], new_countries[1].length
// // new_countries[2]=new_countries[2].length
// // new_countries[3]=new_countries[3].length
// // new_countries[4]=new_countries[4].length
// // new_countries[5]=new_countries[5].length
// // new_countries[6]=new_countries[6].length
// // new_countries[7]=new_countries[7].length
// // new_countries[8]=new_countries[8].length           
// // new_countries[9]=new_countries[9].length
// // new_countries[10]=new_countries[10].length
// console.log(new_countries)










//in class

//task 14       //Develop a small script which generate array of 5 random numbers and the numbers must be unique
//0-100 between

// let numbers = []
// for (let i = 0; i < 5; i++) {
//     numbers.push(Math.round(Math.random() * 20) + i * 20)  // first 20-аралықтағы сан, 2 артып отыруы керек 
// }
// console.log(numbers)



//4
// 

// let uppercaseCountries = []
// for (let i = 0; i < countries.length; i++) {
//     uppercaseCountries.push(countries[i].toUpperCase())
// }
// console.log(uppercaseCountries)


//5
// let uppercaseCountries = []
// for (let i = 0; i < countries.length; i++) {
//     uppercaseCountries.push(countries[i].length)
// }
// console.log(uppercaseCountries)



//6
// let uppercaseCountries = []
// for (let i = 0; i < countries.length; i++) {
//     let arr=[countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length]    //1 индекс,2 разделит,3үлкен әріп,4длина
//     uppercaseCountries.push(arr)
// }
// console.log(uppercaseCountries)



//7
// let landCountries=[]
// for(let i=0;i < countries.length; i++){
//     if(countries[i].endsWith("land")){
//         landCountries.push(countries[i])
//     }
// }
// landCountries.length>0
// ? console.log(landCountries)
// : console.log("All these countries are without land ")       check with if and is there is the word,we push it to massive





//task 8
// let landCountries=[]
// for(let i=0;i < countries.length; i++){
//     if(countries[i].endsWith("ia")){
//         landCountries.push(countries[i])
//     }
// }
// landCountries.length>0
// ? console.log(landCountries)
// : console.log("These are countries ends without ia")




//9
// let maxLength=countries[0].length  //салыстыру үшін
// let country=countries[0]   //ең үлкен элементтің атын сақтау үшін
// for(let i=1;i < countries.length; i++){
// if (countries[i].length>maxLength){
//     maxLength=countries[i].length
//     country=countries[i]
// }
// }
// console.log(country)



//10

// let fiveLetterCountries=[]
// for(let i=1;i < countries.length; i++){
//     if(countries[i].length==5){
//         fiveLetterCountries.push(countries[i])
//     }
// }
// console.log(fiveLetterCountries)




//task 11














//home work

//task 1 mistake
//[700,701,702,705,706,776,747......]
//+7 - (random numbers from the list )  --- random number ---random numbers

// let phoneCodes= [700,701,702,705,706,776,747,775,771]
// let phoneNumbers=[]
// for(let i=1;i < 3; i++ ){
//    if (phoneCodes[i].length>phoneNumbers){

//     phoneNumbers.push=(Math.round(Math.random() * 100000) )
// }

// }console.log(phoneNumbers)



//task 2

// let hue=Math.floor(Math.random() * 360);

// let saturation=Math.floor(Math.random() * 101);

// let lightness=Math.floor(Math.random()*101)

// console.log(`${hue}%  ${saturation}%  ${lightness}%`)





//task 3
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]   
//toLowerCased countries

// let countries= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] 
// // let lowercaseCountries = []
// // for (let i = 0; i < countries.length; i++) {
// //     lowercaseCountries.push(countries[i].toLowerCase())
// // }
// // console.log(lowercaseCountries)



// //first letter like ["A","B","C","D"] бірінші әріпін шығару

// let firstLetter = [];
// for (let i = 0; i<countries.length; i++) {
//     firstLetter.push(countries[i].slice(0,1));
// }
// console.log(firstLetter)





//11.01.2024

//task 1

//кері айналдыру
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// for (let i = countries.length - 1; i >= 0; i--) {
//     console.log(countries[i])
// }


// //for of
// //әрбір элементті тізбектеп шығарады
// for (let country of countries) {  //массивтің ішіндегі элементті алу үшін "country "
//     console.log(country)
// }

// //startswith бастапқы әріпі а басталуын тексеру ,салыстыру
// for (let aplhabet of countries) {
//     if (aplhabet[0] == ("A")) {
//         console.log(aplhabet)
//     }
// } 




//ұзындығы 6 үлкен елдерді шығару
// for (let longerthanSix of countries) {
//     if (longerthanSix.length > 6) {
//         console.log(longerthanSix
//         )
//     }
// }




// summa
// let numbers = [34,23,78,35,90];
// let sum = 0;
// for (let summa of numbers){
//     sum += summa;
// }
// console.log(sum);




//тақ сандар

// for(let number of numbers){
//     if (number %2 ==1){
//         sum+=number
//     }
// }
// console.log(sum)













//WHILE

// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//кері айналдыру
// let i=countries.length-1;
// while(i>=0){
//     console.log(countries[i])
//     i--;
// }





//ретімен шығару
// let i=0;
// while(i<countries.length){
//     console.log(countries[i])
//     i++;
// }




//жұп сандарды шғару
// let numbers = [34, 23, 78, 35, 90];
// let i = 0
// while (i < numbers.length) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i])
//     }
//     i++
// }


//10 
// let i=0
// let number=[]
// while(i<=10){
//     i+=number
//     console.log(i)
//    i++ 
// }




//even numbers
// let i=0
// let number=[]
// while(i<=10){
//     i+=number
//     console.log(i)
//    i++ 
// }




//summa

// let numbers = [34,23,78,35,90];
// let j=0
// let sum=0
// while(j<numbers.length){
//     sum+=numbers[j]
//     console.log(sum)
//     j++
// }





//with break or continue


//continue
// let numbers = [34, 23, 78, 35, 90];
// let i = 0
// while (i < numbers.length) {
//     if (numbers[i] % 2 == 0) {
//          i++
//         continue

//     }
//     console.log(numbers[i])
//     i++
// }



//break
// let numbers = [34 ,23 ,78 ,35 ,90];
// let i = 0;
// while(i < numbers.length) {
//   if (numbers[i] == 35) {
//        break;
//       }
//     console.log(numbers[i])
//        i++
//   }


//
// for (let longerthanSix of countries) {
//     if (longerthanSix.length <= 6) {
//         continue

//     }
//     console.log(longerthanSix)
// }




//
// for (let aplhabet of countries) {
//     if (aplhabet[0] != ("A")) {
//         continue
//     }
//     console.log(aplhabet)
// } 




//
// for (country of countries){
//     if (country =="GERMANY"   ){
//         break
//     }
//     console.log(country)
// }



//task 11
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]


//
// let max=webTechs[0]
// for(let i=1;i<webTechs.length;i++){
//     if(webTechs[i].length<=max.length){
//         continue
//     }
//     max=webTechs[i]
// }
// console.log(max)





// //12
// let arr=[]
// for(let i=0;i<webTechs.length;i++){
//     arr.push([webTechs[i],webTechs[i].length])
// }
// console.log(arr)







// //home work


//task 13
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// for (let i = 0; i<mernStack.length; i++) {
// let letters=mernStack[i][0]
//  console.log(letters) 
// }



//while
// let i= 0
// while(i<mernStack.length){
//     console.log(mernStack[i][0])
//     i++;
// }




//task 14
let languages = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//  for(let i=0;i<languages.length;i++){
//   console.log(languages[i])
//  }

//for of
//  for(let land of languages){
//   console.log(land)
//  }





//task 15
//while

// let fruits= ['banana', 'orange', 'mango', 'lemon']
// let i=fruits.length-1
//  while( i>=0){
//   console.log(fruits[i])
//   i--
//  }



//for
//  for (let i = fruits.length - 1; i >= 0; i--) {
//       console.log(fruits[i])
//   }




//task 16
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ];

// for (const stack of fullStack) {
//   for (const tech of stack) {
//     console.log(tech);
//   }
// }




//Level 3

//task 1   

// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
// let copy = []

// for (let i = 0; i < countries.length; i++) {
//     copy.push(countries[i]);
// }
// console.log(`Copied countries:`, copy)




// //task 2

// // Create a copy of the original array
// let copiedCountries = [];
// for (let i = 0; i < countries.length; i++) {
//     copiedCountries.push(countries[i]);
// }
// let sort = copiedCountries.sort();
// console.log('Sorted  countries:', sort);



// //task 3   


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// let sortWeb = []
// for (let i = 0; i < webTechs.length; i++) {
//     sortWeb.push(webTechs[i])
// }
// let sorted2 = sortWeb.sort()
// console.log('Sorted WebTechs', sorted2)


// //sort merstack


// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// let mern = []
// for (let i = 0; i < mernStack.length; i++) {
//     mern.push(mernStack[i])
// }
// let sortMern = mern.sort()
// console.log('Sorted Mernstack:', mern)




// //task 4

// const countriesWithLand = [];
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].endsWith('land')) {
//         countriesWithLand.push(countries[i]);
//     }
// }
// console.log(countriesWithLand);



// //task 5   ?

// //task 6 and 4 are same



// //task 7
// for (let fourCount of countries) {
//     if (fourCount.length >= 4) {
//         continue

//     }
//     console.log(fourCount)  //not here
// }


// //task 8

// for (let twocount of countries) {
//     if (twocount.length >= 2) {
//         continue

//     }
//     console.log(twocount)  //not here
// }

// //task 9
































































// for (let i =1 ; i <=5; i++){
//   console.log(i)

//   for(let j=1; j<=3;j++){
//     console.log("Inner loop" +j)
//   }
// }