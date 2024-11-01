//block- function,conditionals,loops


// global--барлығы үшін
//local-тек ішінде


// if (true){
//     var c=15
//     console.log(c)
// }
// console.log(c)







// const user1 = {
//     id: 27372378,
//     userName: "roza",   //key(property)-value
//     email: 'querty123',
//     image: 'picture1',
//     birthday: new Date(2006, 3, 13),
//     purchases: [],
//     cart: [],
//     cards: []
// }
// const user2 = {
//     id: 273783984,
//     userName: "sarah",   //key(property)-value
//     email: 'querty456',
//     image: 'picture2',
//     birthday: new Date(2002, 1, 17),
//     purchases: [],
//     cart: [],
//     cards: []
// }

// let displayInfo = function () {
//     //ссылaется на текущий объект
//     return `${this.userName} ${this.email} ${this.birthday}`

// }

// user1.displayInfo = displayInfo
// user2.displayInfo = displayInfo()
// // user2.displayInfo()

// let displayUserId = function () {
//     return this.id
// }
// user1.displayUserId = displayUserId
// user2.displayUserId = displayUserId()
// // user2.displayUserId()



// function addCard(card) {
//     this.cards.push(card)
// }
// user1.addCard = addCard
// // user1.addCard(card1)
// console.log(user1.cards)
// // user1.addCard(card2)



// const product1 = {
//     category: "laptop",
//     name: "acer",
//     price: 450000,
//     ram: 16,
//     ssd: 512
// }

// const card1 = {
//     bank: 'kaspi',
//     accounNumber: 440403940239203,
//     owner: 'Temirbay Roza',
//     cvv: 179
// }


// const product2 = {
//     category: "Mobile phone",
//     name: 'Vivo',
//     price: 150000,
//     ram: 15,
//     ssd: 128
// }

// const product3 = {
//     category: "TV",
//     name: 'Samsung',
//     price: 900000,
//     ram: 25,
//     ssd: 1028
// }

// const product4 = {
//     category: "laptop",
//     name: 'macbook',
//     price: 100000,
//     ram: 15,
//     ssd: 512
// }

// const product5 = {
//     category: "Mobile phone",
//     name: 'Iphone',
//     price: 150000,
//     ram: 15,
//     ssd: 128
// }


// const card2 = {
//     bank: 'kaspi',
//     accounNumber: 440403940239203,
//     owner: 'Temirbay Roza',
//     cvv: 179
// }
// //значениесін алу үшін


// console.log(card1.bank)
// console.log(card1.owner)
// console.log(card1["cvv"])  ///ключ көп сөзден құралса

// let keyName = 'cvv'
// console.log(card1[keyName])


// //добавляеть в card1
// card1.expiringDate = "06/27"
// console.log(card1.expiringDate)

// card1.expiringDate = new Date(2027, 5)
// console.log(card1.expiringDate)


// card2.expiringDate = '11/30'
// console.log(card2.expiringDate)

// card2.expiringDate = new Date(2030, 11)  //  30/11adding a new property /key-value
// console.log(card2.expiringDate)


// card1.cvv = 789
// console.log(card1.cvv)


// //object creation
// //adding a new property
// //changing existing key value
// //accesing a value
// //объект ішіндегі функция - метод
// //метод- объектпен жұмыс жасайды 




// //hw

// // 1 корзинаға заттарды қосу
// function addProducttoCart(product) {
//     this.cart.push(product)
// }
// user1.addProducttoCart = addProducttoCart
// user1.addProducttoCart(product1)
// console.log(user1.cart)
// user1.addProducttoCart(product2)


// //2

// function purchaseProduct(prdct) {
//     this.purchases.push(prdct)
// }
// user1.purchaseProduct = purchaseProduct
// user1.purchaseProduct(product3)
// console.log(user1.purchases)
// user1.purchaseProduct(product4)




// //23.01.2024

// let student = {
//     name: 'Sarah',
//     surname: 'Alens',
//     age: 20,
//     email: 'saraainjrzHH',
//     grades: {
//         english: [5, 4, 4, 3, 6, 7, 3, 8, 9,],
//         chemestry: [4, 5, 6, 7, 4, 7],
//         history: [9, 6, 3, 7, 3, 2, 2],
//         math: [6, 5, 4, 6, 8, 6, 7],
//         phisics: [6, 7, 8, 9, 5, 4, 3]
//     },
//     subjects: [
//         'english',
//         'phisic',
//         'history',
//         'math',
//         'chemestry'
//     ],
//     attendance: [
//         {
//             attended: true,
//             date: new Date(2024, 0, 23),

//         },
//         {
//             attended: false,
//             date: new Date(2024, 0, 22),

//         },
//         {
//             attended: true,
//             date: new Date(2024, 0, 18)

//         }
//     ],
//     setGrade: function (subjects, grade) {
//         this.grades[subjects].push(grade);   //grade-is object ,subject-is variable
//     }
// }
// student.setGrade('chemestry', 5);
// student.setGrade('english', 2);
// console.log(student.grades)


// // student.id = 23389
// // console.log(student.id)//жаңа свойство-значение қосу


// // student.age=student.age+1  //жасын арттыру
// // console.log(student.age)
// // //or
// // student.age+=1
// // console.log(student.age)


// // console.log(student.grades)//значение алу
// // console.log(student.birth)
// // console.log(student.subjects)
// // console.log(student.attendance)


// for (const key in student) {   //объекттің свойстваларын алады key  деген айнымалмен
//     console.log(key)
//     console.log(student[key])
//     console.log(`${key}:${student[key]}`) //значение свойствасыг алады,нүктемен емес

// }

// //егер свойстванң аты айнымалыда сақталса,тік жақша ішіне айнымалы қойып,значениесін 
// //проста свойстваның атын қолдансаңыз,нүкте арқылы аласыз


// const books = [
//     { name: 'Javascript', quantity: 20 },
//     { name: 'Html', quantity: 15 },
//     { name: 'css', quantity: 25 },
//     { name: 'Java', quantity: 30 },
// ]
// // books[0].quantity += 1
// // console.log(books[0].quantity)

// // books[1].quantity += 1
// // console.log(books[1].quantity)

// // books[2].quantity += 1
// // console.log(books[2].quantity)

// // books[3].quantity += 1
// // console.log(books[3].quantity)



// // for (let i = 0; i < books.length; i++) {
// //     console.log(books[i])
// // }


// for (let i = 0; i < books.length; i++) {
//     books[i].quantity+=1
//     // 
// }
// console.log(books)


// for (let i = 0; i < books.length; i++) {
//     books[i].author='Abay'
// }
// console.log(books)


// //hw
// //summa of books
// //букстың общий суммасын табу
// let sum=0
// for (let i = 0; i < books.length; i++) {
//  sum+=books[i].quantity

// }
// console.log(sum)


// let users=[
// {name:'Lana', age:20},
// {name:'Lucky', age:22},
// {name:'Ariel', age:21},
// {name:'Henry', age:23},
// {name:'Etsuko', age:25}
// ]


// for (let i = 0; i < users.length; i++) {
//     users[i].age+=1
// }
// console.log(users)

// //or

// for(let user of users){
//     user.age+=1
// }


//бір массивтан екіншісіне қосу
// let userUpper=[]
// let usersOlder=[]
// for (const user of users){
//   userUpper.push({name:user.name,age:user.age})  
// }
// console.log(users)


// //age арттыру 10-ға
// for(const userUpper of users){
//     usersOlder.push({name:userUpper.name,age:userUpper.age+10})
// }
// console.log(usersOlder)


// //doubled numbers
// const nums=[1,2,3,4,5];
// let doubledNums=[]
// for(const num in nums){
//     doubledNums.push(num*2)
// }
// console.log(doubledNums)




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



let users = [
    { name: 'Lana', age: 20 },
    { name: 'Lucky', age: 22 },
    { name: 'Ariel', age: 21 },
    { name: 'Henry', age: 23 },
    { name: 'Etsuko', age: 25 }
]
const upName = users.map((user) => {
return {name:user.name.toUpperCase(),age:user.age}
})
console.log(upName)