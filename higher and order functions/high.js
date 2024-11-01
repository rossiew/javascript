//map

// const numbers=[1,2,3,4,5]                        //map-трансформация жасайды 
// const DoubledNunbers = numbers.map((num)=>{     //transformation function
// return num*2                                   //жаңа массив қайтарады   
// })
// console.log(DoubledNunbers)

//10++++++
// const numss=[1,2,3,4,5]
// const tens = numss.map((num)=>{     
// return num+10     
// })
// console.log(tens)

//toUpperCase
// const names=['roza','sara','john','iris','sand']
// const uppers= names.map((name)=>{
//     return name.toUpperCase()
// })
// console.log(uppers)


// //add hello
// const names=['roza','sara','john','iris','sand']
// const hellous= names.map((i)=>{
//     return i.toUpperCase()
// })
// console.log(`hello`)



// let users = [
//     { name: 'Lana', age: 20 },
//     { name: 'Lucky', age: 22 },
//     { name: 'Ariel', age: 21 },
//     { name: 'Henry', age: 23 },
//     { name: 'Etsuko', age: 25 }
// ]
// const upName = users.map((user) => {
// return {name:user.name.toUpperCase(),age:user.age}
// })
// console.log(upName)




//24.01.2024


//forEach()- only with massive, объекттің өзін өзгертеді
// const numbers=[1,2,3,4,5]

// numbers.forEach((num)=>{
//     console.log(num*2)
// })


// const tripledNumbers=[]
// numbers.forEach((num)=>{
//     tripledNumbers.push(num*3)
//     console.log(tripledNumbers)
// })


//бір жолдан туратын болса 
//numbers.forEach(num=>tripledNumbers.push(num*3))



// let sum =0
// const numbers=[1,2,3,4,5]
// numbers.forEach((num)=>{    //numbers.forEach(num=>sum+=num)
//     sum+=num
//     console.log(sum)
// })

// let sum =0
// const numbers=[1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((num)=>{   
//     if(num%2==0) {
//       sum+=num  
//     }
//     console.log(sum)
// })


// let users = [
//     { name: 'Lana', age: 20 },
//     { name: 'Lucky', age: 22 },
//     { name: 'Ariel', age: 21 },
//     { name: 'Henry', age: 23 },
//     { name: 'Etsuko', age: 25 }
// ]
// // users.forEach((addtofive)=> addtofive.age+=5)
// // console.log(users)



// // const uppers = users.map((user) => {
// //     return { name: user.name.toUpperCase(), age: user.age += 5, city: "Almaty" }
// // })
// // console.log(uppers)



// //level 1---3/10 дейін

// //home work

// //task 3
// // // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// // countries.forEach((all_count)=>{
// //     console.log(all_count)
// // })


// //task 4
// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// // names.forEach((all_name)=>{
// //     console.log(all_name)
// // })

// // //task 5
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // numbers.forEach((all_numb)=>{
// //     console.log(all_numb)
// // })

// // //task 6
// // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// // const UpperCountries=countries.map((count)=>{
// //     return count.toUpperCase()
// // })
// // console.log(UpperCountries)

// //task 7
// // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// // const LengthCountries=countries.map((lenzgh)=>{
// //     return lenzgh.length
// // })
// // console.log(LengthCountries)


// //task 8
// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // const squareNumbers=numbers.map((square)=>{
// // //     return square**2
// // // })
// // // console.log(squareNumbers)


// // //task 9
// // // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// // // const UpperNames=names.map((upp)=>{
// // //     return upp.toUpperCase()
// // // })
// // // console.log(UpperNames)





// // // //25.01.2024

// // // //classwork 1
// // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // numbers.forEach((num) => {
// // //     if (num % 2 == 0) {
// // //         console.log(num)
// // //     }
// // // })


// // // //classwork 2
// // // const tripleNumbers = numbers.map((triple) => {
// // //     return triple * 3
// // // })
// // // console.log(tripleNumbers)


// // //classwork 3  summa of numberes?
// // // let sum=0
// // // numbers.forEach((sum) => {
// // //     if (sum % 2 ==1) {
// // //         sum += numbers

// // //     }
// // // console.log(numbers)

// // // }) 


// // //classwork 4
// // //сандар тубир астындағы қосындысы   ?


// // // //filter
// // // const numbers = [1, 2, 3, 4, 5, 6, 7]
// // // const evenNumbers = numbers.filter((num) => {
// // //     return num % 2 === 0
// // // })
// // // console.log(evenNumbers)


// // // //5
// // // const sities = ['Los Angeles', 'New York', 'Chicageo', 'Houston', 'philadelphia', 'San Francisco', 'Dallas', 'San']
// // // const LongerSix = sities.filter((six) => {
// // //     return six.length > 7
// // // })
// // // console.log(LongerSix)

// // // //6
// // // const StartS = sities.filter((s) => {
// // //     return s.startsWith('S')   //or city[0]=='S'
// // // })
// // // console.log(StartS)

// // // //7
// // // const sitiesPopulation = [
// // //     { city: "Los Angeles", population: 1000 },
// // //     { city: "New York", population: 2000 },
// // //     { city: "Chicago", population: 3000 },
// // //     { city: "Philadelphia", population: 4000 },
// // //     { city: "San Francisco", population: 1500 }

// // // ]
// // // const tenLong = sitiesPopulation.filter((city) => {
// // //     return city.population > 1500
// // // })
// // // console.log(tenLong)


// // // //8
// // const users = [
// //     { name: 'John', age: 18 },
// //     { name: 'Jane', age: 25 },
// //     { name: 'Mary', age: 17 },
// //     { name: 'Mike', age: 28 }
// // ]
// // const BigThanEighteen = users.filter((user) => {
// //     return user.age > 18
// // })
// // console.log(BigThanEighteen)




// // //find  -- Условия сәйкес келетін бірінші элементті қайтарады,массив қайтармайды


// // //1
// // const sities = ['Los Angeles', 'New York', 'Chicago', 'Houston', 'philadelphia', 'San Francisco', 'Dallas', 'San']

// // const LongerO = sities.find((six) => {
// //     return six.endsWith('o')
// // })
// // console.log(LongerO)
// // //or
// // sities.find((six) => six.endsWith('o'))

// // //2
// // const sitiesPopulation = [
// //     { city: "Los Angeles", population: 1000 },
// //     { city: "New York", population: 2000 },
// //     { city: "Chicago", population: 3000 },
// //     { city: "Philadelphia", population: 4000 },
// //     { city: "San Francisco", population: 1500 }

// // ]
// // const tenLong = sitiesPopulation.find((city) => {
// //     return city.population == 3000
// // })
// // console.log(tenLong)


// // //3


// // const users = [
// //     { name: 'John', age: 18 },
// //     { name: 'Jane', age: 25 },
// //     { name: 'Mary', age: 17 },
// //     { name: 'Mike', age: 28 }
// // ]
// // const startsM = users.find((user) => {
// //     return user.name.startsWith('M')
// // })
// // console.log(startsM)


// // //4 
// // const numbers = [1, 2, 3, 4, 5, 6, 7]
// // function double(nums) {
// //     return nums.map(num => num * 2)
// // }
// // console.log(double([1, 2, 3, 4, 5, 6]))
// // console.log(double(numbers))


// // //5
// // function increment(nums) {
// //     numbers.forEach((value, index) => {
// //         nums[index] = value + 1
// //     })
// //     return nums
// // }
// // console.log(increment(numbers))

// // //6
// // const sitiess = ['Los Angeles', 'New York', 'Chicageo', 'Houston', 'philadelphia', 'San Francisco', 'Dallas', 'San']

// // function  addExxlamation(array){
// //     array.forEach((value,index)=>{
// //         array[index]=value+'!'
// //     })
// //     return array
// // }
// // console.log(addExxlamation(sities))


// //7
// const sitiesPopulation = [
//     { city: "Los Angeles", population: 1000 },
//     { city: "New York", population: 2000 },
//     { city: "Chicago", population: 3000 },
//     { city: "Philadelphia", population: 4000 },
//     { city: "San Francisco", population: 1500 }

// ]
// function twoLonger(cities){
// const filteredCities=cities.filter(city=>city.population >2000)
// return filteredCities
// }  console.log(twoLonger(sitiesPopulation))


//8 mistake 
// const sitiesPopulation = [
//     { city: "Los Angeles", population: 1000 },
//     { city: "New York", population: 2000 },
//     { city: "Chicago", population: 3000 },
//     { city: "Philadelphia", population: 4000 },
//     { city: "San Francisco", population: 1500 }

// ]

// function twoLonger(cities,population){
//     const filteredCities=cities.filter(city=>city.population>population )
//     return filteredCities
//     }  console.log(sitiesPopulation(cities,1500))


// //9
// function increment(nums, number) {
//   number.forEach((value, index) => {
//     nums[index] = value + number
//   })
//   return nums
// }
// console.log(increment(nums(1, 2)))




//hw
// 11 Use filter to filter out countries containing land.

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

// const endWithLand = countries.filter((land) => {
//  return land.endsWith('land')
// })
// console.log(endWithLand)

// //12  Use filter to filter out countries having six character.

// const haveSix=countries.filter((had)=>{
//   return had.length ==6
// })
// console.log(haveSix)

// //13 Use filter to filter out countries containing six letters and more in the country array.
// const moreThanSix=countries.filter((more)=>{
//   return more.length >=6
// })
// console.log(moreThanSix)


// //14 Use filter to filter out country start with 'E';
// const startsE=countries.filter((stE)=>{
//   return stE.startsWith('E')
// })
// console.log(startsE)


// //15 Use filter to filter out only prices with values.
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// const onlyPrice=products.filter((only)=>{
//   return only.price
// })
// console.log(onlyPrice)

// //23 Use find to find the first country containing only six letters in the countries array

// const equalSix= countries.find(eqS=>eqS.length==6)
// console.log(equalSix)









//prepare to test in javascript

//task 1 done 
let sum = 0;
function sumbetween(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum
}
console.log(sumbetween(0, 10));









//task 2 done
function onlyLands(...lands) {
  let landWords = [];
  for (let i = 0; i < lands.length; i++) {
    if (lands[i].endsWith('land')) {
      landWords.push(lands[i]);
    }
  }
  return landWords;
}
const result = onlyLands("Island", "Italy", "Kazakhstan", "England")
console.log(result); // ["Island", "England"]








//task  3 50/50


function makeUser(firstname, lastname, birthYear) {
  let takeingYer = new Date().getFullYear();
  let age = takeingYer - birthYear;

  let user = {
      firstname: firstname,
      lastname: lastname,
      age: age,
      greeting: function() {
          return `Hello, ${this.firstname} ${this.lastname}!`;
      }
  };

  return user;
}

const user1 = makeUser("Leo", "Messi", 1987);
console.log(user1.firstname) // "Leo" 
console.log(user1.lastname) // "Messi" 
console.log(user1.age) // 37
console.log(user1.greeting()) 









//task 4 not understand 
function getAges(users) {
  let currentYear = new Date().getFullYear();
  let ages = [];

  for (let i = 0; i < users.length; i++) {
      let age = currentYear - users[i].birthYear;
      ages.push(age);
  }

  return ages;
}

const users = [
  { name: 'John', birthYear: 1990 },
  { name: 'Alice', birthYear: 1985 },
  { name: 'Bob', birthYear: 2000 }
];

const ages = getAges(users);
console.log(ages); // Output: [32, 37, 22]








//task 5  done
function getTotalPopulation(cities){
  let getAllPopulation=0
  for (let i=0;i<cities.length;i++){
    getAllPopulation+=cities[i].population
  }
  return getAllPopulation
}
const cities = [{cityName: "Astana", population: 1200}, {cityName: "Almaty", population: 2200}, {cityName: "Shymkent", population: 1100}]
console.log(getTotalPopulation(cities))










//task 6
function getHighGrades(studentScores){
  let highBalls=[]
  for(let i=0;i<studentScores.length;i++){
    if(studentScores[i].score >=50 ){
      highBalls.push(studentScores[i])
    }
    return highBalls
  }
}
const studentScores = [{id: 14, name: "John", score: 50}, {id: 7, name: "Peter", score: 70}, {id: 23, name: "Mary", score: 30}]
console.log(getHighGrades(studentScores)) 








//task 7   noooot





