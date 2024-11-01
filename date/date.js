//new Date- дәл қазіргі уақытты көрсету үшін
let now= new Date();
console.log(now)

//кешегі күн үшін
let yesterday= new Date("2023-12-20")
console.log(yesterday)

//туған күнге арналған
let myBirthday=new Date("2006-03-13")
console.log(myBirthday)


let mybth= new Date("2006-03-13") //2006-03-13T06:45:00
console.log(mybth.getFullYear())
console.log(mybth.getMonth())  // 0-11    айдың индексн шығарады  
console.log(mybth.getDay())  //   0-6     дейін  воскресеньеден басталады,күнін шығарады
console.log(mybth.getDate()) //   1-31    айдың ішіндегі күнді алады   
console.log(mybth.getHours())  // 0-23    сағат
console.log(mybth.getMinutes()) //0-59
console.log(mybth.getMilliseconds())//0-999
// console.log(mybth.gettime())//01.01.1970 // жазылған жылдан бастап 1970 дейін жылға дейінгі миллисекундтар// екі датаны салыстыру ,арасындағы ұзындығы, айырмашылығын табу үшін


//examples
let d1=new Date("2023-04-27")
let d2=new Date("2023-08-19")
let msDiff=d2.getTime()-d1.getTime()
console.log(msDiff)


let sDiff= msDiff/1000
console.log(sDiff)

let minDiff=msDiff/(1000*60)
console.log(minDiff)


let hrDiff=msDiff / (1000*60*60)
console.log(hrDiff)//?


let dayDiff= msDiff / (1000*60*60*24)
console.log(dayDiff)


let weekDiff=msDiff/(1000*60*60*24*7)
// console.log(weekDiff)
console.log(Math.round(weekDiff))


let monthDiff=msDiff / (1000 * 60 * 60 * 24  * 30)
console.log(Math.round(monthDiff))

let yearDiff= msDiff/ (1000*60*60*24*365)
console.log(Math.round(yearDiff) )


let bthh=prompt("Enter your bthh:")
let birthdayDate=new Date (bthh)
let currentDate=new Date()
msDiff=currentDate.getTime()-birthdayDate.getTime()
yearDiff=msDiff / (1000 * 60 * 60 * 24 * 365)
console.log(Math.round(yearDiff))

let date3= new Date(1991,10,27)
console.log(date3)


























// Home work 

// task 1     Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthday=Number(prompt("Enter your birth year: "))
let agee = new Date().getFullYear() - birthday;
if (agee>=18){
    console.log(`You are ${agee}. You are old enough to drive`)
}else{
    console.log(`You are ${agee}. You will be allowed to drive after ${18-agee} years.`)
}



// task 2    Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let yer=Number(prompt("Enter number of years you live: "))
let age=100-yer;

let seconds = age * 365.25 * 24 * 60 * 60;
console.log(`You  lived ${ age * 365.25 * 24 * 60 * 60} seconds.`);



// task 3  Create a human readable time format using the Date time object

// let dateInfo = new Date();
// let yie = dateInfo.getFullYear();
// let mnth = dateInfo.getMonth();
// let dat = dateInfo.getDate();
// let clock = dateInfo.getHours();
// let min  = dateInfo.getMinutes();
// // 1
// console.log(`${yie}-${mnth}-${dat} ${clock}:${min }`);
// // 2
// console.log(`${dat}-${mnth}-${yie} ${clock}:${min }`);
// // 3
// console.log(`${dat}/${mnth}/${yie} ${clock}:${min }`);



// task 4   Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let time = ('');
let for_now = new Date();
let hours = for_now.getHours();
let minutes = for_now.getMinutes()
time = (`${hours}:${minutes}`);
console.log(time);













// HOME WORKS

// TASK 1



let j = 11;
let k = 15;
let l = 23;
let m = 17;
let n = 14;
let o = 19;
let p = 13;
let q = 20;
let r = 18;
let s = 10;
let t = 22;
let u = 16;
let v = 21;
let w = 12;
let x = 25;
let y = 27;
let z = 24;
let aa = 26;
let bb = 28;
let cc = 29;

//let problem_1 = ++j - k++ * ++l + ++n;
let problem_1=12 - 15 * 24 + 15 
console.log(problem_1)//-333

//let problem_2 = ++m + p-- * --o + ++j;
let problem_2= 18+12*18+12 
console.log(problem_2)//246

//let problem_3 = ++l - cc++ / ++n + ++m;
let problem_3=24-29/15+18
console.log(Math.round(problem_3)) //40

//let problem_4 = ++q * p-- - --j + ++l;
let problem_4=21*12-10+24
console.log(problem_4) //266

//let problem_5 = ++n / o++ + ++cc * --r;
let problem_5=15 / 19 + 30 *17
console.log(Math.round(problem_5))  //511

//let problem_6 = ++w % p++ - ++j / --l;
let problem_6 = 13 % 13 - 12 / 22
console.log(Math.round(problem_6)) //-1

//let problem_7 = ++p * cc-- / --r + ++k;
let problem_7 = 14 * 28 / 17 + 16
console.log(Math.round(problem_7))  //39

//let problem_8 = ++q + w-- % --l + ++m;
let problem_8 = 21 + 11 % 22 + 18
console.log(problem_8)  //50

//let problem_9 = ++r / l++ - ++p % --w;
let problem_9= 19 / 23 - 14 % 11
console.log(Math.round(problem_9))  //-2

//10.     ++l + o-- * --cc + ++k;
let problem_10 = 24 + 18 * 28 + 16
console.log(problem_10)  //544

//11.     ++w % cc++ + ++q - --t;
let problem_11 = 13 % 29 + 21 - 21
console.log(problem_11)  //13

//12.     ++l - o++ / ++m + ++w;
let problem_12 = 24 - 19 / 18 + 13
console.log(Math.round(problem_12)) //36

//13.     ++p * k-- + --j + ++p;
let problem_13 = 14* 14 + 10 + 14
console.log(problem_13)   //220

//14.     ++n / cc++ - ++w % --l;
let problem_14 = 15 / 29 - 13 % 22
console.log(Math.round(problem_14))  //-12

//15      ++k + l-- % --w + ++q;
let problem_15 = 16 + 22 % 11 + 21
console.log(problem_15)  //37

//16.     ++r * t-- / --o + ++p;
let problem_16 = 19 *  21 / 18 + 14
console.log(Math.round(problem_16))  //36

//17.     ++o % l++ + ++q - --j;
let problem_17 =20 %  23 + 21- 10
console.log(problem_17) //31

//18.     ++j - p++ / ++r + ++l;
let problem_18 = 12 - 13 / 19 + 24
console.log(Math.round(problem_18)) //35

//19.     ++l * t-- + --k + ++p;
let problem_19 = 24 * 21 + 14 + 14
console.log(problem_19) //532

//20.     ++t % l++ - ++q / --o;
let problem_20 = 23 % 23 - 21 / 18
console.log(Math.round(problem_20))  //-1





// TASK 2
//1
console.log(!(Math.ceil(7 / 3) > 5) || Math.sqrt(12) != Math.min(7, Math.ceil(7 / 2)) && Math.ceil(29 % 7) <= 18 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4); //true

//2 
console.log(!(Math.round(4 / 5) > 5)) && Math.sqrt(18) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 6 && Math.pow(2, 3) % 2 == 2||  Math.ceil(12 /  8  >= 4); //true

//3
console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(20) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 6) >= 4); //true

//4
console.log(!(Math.floor(6 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4); //true

//5
console.log(!(Math.round(4 / 5) > 5) || Math.sqrt(8) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 0  || Math.round(12 / 4) >= 4); //true

//6
console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 4 || Math.ceil(12 / 10) >= 4); //true

//7
console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(14) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 20) >= 4);  //true

//8
console.log(!(Math.ceil(8 / 5) > 5) ||  Math.sqrt(10) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4); //true

//9
console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(12) != Math.min(7, Math.ceil(7 / 3)) ||  Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 3 || Math.ceil(12 / 4) >= 4); //true

//10
console.log(!(Math.ceil(7 / 5) > 5) || Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4);  //true

//11
console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(22) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 5 || Math.ceil(12 / 4) >= 4); //true

//12
console.log(!(Math.floor(4 / 5) > 5)||  Math.sqrt(24) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2||  Math.ceil(12 / 14) >= 4);

//13
console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(18) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4);

//14
console.log(!(Math.round(10 / 5) > 5) || Math.sqrt(20) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 0) >= 4);

//15
console.log(!(Math.ceil(12 / 5) > 5) ||  Math.sqrt(12) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4);

//16
console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3))||  Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 2) >= 2);



// TASK 7 IN 30 DAYS OF JAVASCRIPT

// Use the Date object to do the following activities

// What is the year today?
let dateInfo = new Date();
let year = dateInfo.getFullYear();
console.log(year)

// What is the month today as a number?
let month=dateInfo.getMonth()
console.log(month)

// What is the date today?
let date=dateInfo.getDate()
console.log(date)

// What is the day today as a number?
let day=dateInfo.getDay()
console.log(day)

// What is the hours now?
let hour=dateInfo.getHours()
console.log(hour)

// What is the minutes now?
let minute= dateInfo.getMinutes()
console.log(minute)


// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let find= dateInfo.getTime()
console.log(find)


 /lesson

 let date1 = new Date(2022, 0, 15);
 let date2 = new Date(2022, 6, 1);

 let diffMs=date2.getTime()- date1.getTime()
 let diffWeek= diffMs / (1000*60*60*24*7)
 console.log(`${diffWeek} between ${date1} and ${date2}`);



// уақытты табу барысында бірінші миллисекунды табу қажет 


// ms -> year (1000 * 60 * 60 * 24 * 365)
// ms -> month (1000 * 60 * 60 * 24 * 30)
// ms -> hours (1000 * 60 * 60)
// ms -> mins (1000 * 60)
// ms -> week (1000 * 60 * 60 * 24 * 7)

































































































































































