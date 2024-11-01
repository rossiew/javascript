//variable- данный сақтау үшін қолдану


// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index


let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3)) // D ASCII number is 68



// concat(): бастапқы сөзге сөз жалғау үшін
let country = 'Fin'
console.log(country.concat("land")) // Finland


// includes(): сөздің басталуына қатысты 
let stringg = '30 Days Of JavaScript'
console.log(stringg.includes('Days'))     // true
console.log(stringg.includes('days'))     // false



// length: используется для длины 

let js = 'JavaScript'
console.log(js.length)        // 10
let firstName = 'Asabeneh'
console.log(firstName.length) // 8



let stringo = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringo.match('love'))


// repeat(): повторение, например 10 раз.
let stringl = 'love'
console.log(stringl.repeat(10)) // lovelovelovelovelovelovelovelovelovelove





// replace(): заменять ,например джава на пайтон

let stringi = '30 Days Of JavaScript'
console.log(stringi.replace('JavaScript', 'Python')) // 30 Days Of Python





//split ():  разделить

let Name = 'Asabeneh'
console.log(Name.split())  // ["Asabeneh"]
console.log(Name.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]




//substr():  как разделение

let countryk = 'Finland'
console.log(countryk.substr(3, 4))   // land



//trim(): Removes.удалить
let stringa = '   30 Days Of JavaScript   '
console.log(stringa)     // 
console.log(stringa.trim(' '))  





//Home work

// 1. Given a list of numbers [14, 32, 9, 27, 41], find the minimum value.

let num = [14, 32, 9, 27, 41];

let minnum= Math.min.apply(null, num);
let maxnum= Math.max.apply(null, num);

console.log("mim: " + minnum);
console.log("max: " + maxnum);


//  2. Take the minimum value found in step 1, divide it by 745, and round up the result to the nearest greater integer.




//  3. Generate a random decimal number between 0 and 50 .




//  4. Sum the rounded-up result from step 2 and the random number from step 3.




//lesson 
//let-айнымалы құрады 

let password ='         345        '
console.log(password.trim())
password=password.trim()
console.log(password)


if (password.length<8 ){
console.log("The password should contain at least 8 symbols.")
}
else{
    console.log("Passord saved.")
}


let countries='finland,sweden,norway,denmark,iceland'
let countriesList =countries.split()
console.log(countriesList)
countriesList= countries.split("")
console.log(countriesList)
countriesList=countries.split("a")
console.log(countriesList)
