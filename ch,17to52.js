// // QNO 1
let arry = ['','','']
// console.log(arry)

// QNO 2
let arr = [123,123,1234]
// // console.log(arr)

// QNO 3
for(let i = 1; i<=10; i++){
    // console.log(i)
}

// QNO 4
let inputTableNum = +prompt("Enter a number to show is mutiplication table")
let inputLength = +prompt("Enter the length for the table")
for(let i = 1; i<=inputLength; i++){
    console.log(inputTableNum+'x'+i+'='+(i*inputTableNum))
}


// QNO 5
let fruits = ['apple','banana','mango','stawberry','cake']
for(let i = 0; i <= fruits.length - 1; i++){
    console.log('index 0 is '+fruits[0])
    // console.log('index 1 is '+fruits[1])
    // console.log('index 2 is '+fruits[2])
    // console.log('index 3 is '+fruits[3])
    // console.log('index 4 is '+fruits[4])
}


// Qno 6
for(let i=1; i<=15; i++){
    console.log(i)
}

for(i=10; i>=1; i--){
    console.log(i)
}
 for(let i=1; i<=20; i+=2){
    console.log(i)

 }

for(let i=0; i<=20; i+=2){
    console.log(i)
}

 for(let i=2; i<=20; i+=2){
    console.log(i+'k')

 }

// QNO 7
 let itemArry = ['cake','biscuits','chocalate','chips','patties']
 let inputUser = prompt("Welcome to hamza bakery , seacrch for items in bakkery")

if(itemArry[inputUser] === inputUser[inputUser]){
    alert("here is your item "+inputUser+' index is '+itemArry.indexOf(inputUser))
}else{
    alert("your item is not avialable "+inputUser)
}


// QNO 8

let numbers = [24,53,78,91,12]
console.log(numbers)
let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log('the largest number is '+largest)

// QNO 9
let smallNumbers = [24,53,78,91,12]
let Smallest = smallNumbers[0];
for(let i=1; i<smallNumbers.length; i++){
    if(smallNumbers[i] < Smallest){
        Smallest = smallNumbers[i];
    }
}
console.log(smallNumbers)
console.log('the smallest number is  '+Smallest)



// QNO 10
let five = 5;
for(let i=1; i<=20; i++){
    console.log(i*five)
}

 97 changes: 97 additions & 0 deletions97  
ch21to25.js
@@ -0,0 +1,97 @@
// QNO 1
let Fname = prompt("Enter your First name");
let Lname = prompt("Enter your last name");
let fullName = Fname + ' ' + Lname;
alert("Welcome to  " + fullName.toLocaleUpperCase());

// QNO 2
let mobileName = prompt("Enter your Mobile name and model");
alert("Length of string is " + mobileName.length);

// Qno 3
let word = 'pakistani';
console.log(word.indexOf('n'));


// // QNO 4
let word2 = 'HELLO WORLD'
console.log(word2.lastIndexOf('L'))


// Qno 5
let word3 = 'pakistani';
console.log("character at index 3 is " + word3.charAt(3).toUpperCase())


// QNO 6
let Fname1 = prompt("Enter your First name");
let Lname2 = prompt("Enter your last name");
let fullName1 = Fname1.concat(" " + Lname2)
alert("Welcome to  " + fullName1)

// Qno 7
let word4 = 'Hyderabad'
let word5 = word4.replace('Hyder', 'Islam')
console.log("the word is " + word5)


// QNO 8
let msge = 'Ali and Sami are best friends. They play cricket and play together';
let upmsge = msge.replaceAll('and', '&')
console.log(upmsge)

// QNO 9
let str = '472';
console.log(+str)
console.log(typeof +str)
console.log(str.parseInt())

// QNO 10

let input = prompt("enter the name of any fruits")
alert(input.toLocaleUpperCase())


// Qno 11
let input1 = prompt("enter the name of any fruits")[0]
alert(input1.toUpperCase())

// QNO 12
let word6 = 56.33;
let updatedWord6 = word6.toString();
console.log(word6)
console.log(updatedWord6.replace('.', ''))

// QNO 13
let userInput = prompt("Enter your user name")
for (let i = 0; i < userInput.length; i++) {
    const charcode = userInput.charCodeAt(i);
    if (charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64) {
        console.log("enter the valid user name without ht specail charcater")
    }
}


// QNO 14

let itemArry = ['cake', 'biscuits', 'chocalate', 'chips', 'patties']
let inputUser = prompt("Welcome to hamza bakery , seacrch for items in bakkery")

if (itemArry[inputUser] === inputUser[inputUser]) {
    alert("here is your item " + inputUser + ' index is ' + itemArry.indexOf(inputUser))
} else {
    alert("your item is not avialable " + inputUser)
}


// QNO 15
let ui = prompt("enter the name of any thing")
if (ui.length > 0) {
    const lastword = ui.charAt(ui.length - 1);
    console.log("the last character " + ui + " is " + lastword)
}





 46 changes: 46 additions & 0 deletions46  
ch26to30.js
@@ -0,0 +1,46 @@
// console.log("hamza")

// QNO 1
let userinput = + prompt("enter the positive integer");
 console.log('number'+userinput);
 console.log('round of value'+Math.round(userinput));
 console.log('floor value'+Math.floor(userinput));
 console.log('ceil value of the number'+Math.ceil(userinput));

// QNO 2
let userinput1 = + prompt("enter the negative integer");
 console.log('number'+userinput1);
 console.log('round of value'+Math.round(userinput1));
 console.log('floor value'+Math.floor(userinput1));
 console.log('ceil value of the number'+Math.ceil(userinput1));

// QNO 3
let dice = Math.ceil((Math.random() * 6 )) ;
console.log(dice)

// QNO 4
let coin = Math.ceil(Math.random() * 2);
console.log(coin)


// QNO 5
let randomNumber = Math.ceil(Math.random() * 100);
console.log("randon numbers between 1 to 100 is "+randomNumber)

// QNO 6
let kg = + prompt("enter your weigth in kilograms")
    let upkg= parseInt(kg)
    console.log(upkg)


// QNO 8 
 let generates = Math.ceil(Math.random() * 10);
 console.log(generates)
 let userNumber = + prompt("Enter the numbers between 1 to 10")
 if(userNumber == generates){
    alert("congratulation user you enter the correct number")
 }else{
    alert("Wrong number please try agrain")
 }


 98 changes: 98 additions & 0 deletions98  
ch31to34.js
@@ -0,0 +1,98 @@
// console.log("hello there")
// Qno 1
let cureentDate = new Date()
console.log(cureentDate)

// QNO 2
// Get the current date
const currentDate1 = new Date();
// Get the current month (0-indexed, so add 1 to get the actual month)
const currentMonth = currentDate1.getMonth() + 1;
// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
// Get the name of the current month
const currentMonthName = monthNames[currentMonth - 1];
// Alert the current month in words
alert("The current month is: " + currentMonthName);

// QNO 3
// // Get the current date
const currentDate = new Date();
 const currentday = currentDate.getDay() + 1;s
const days =['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
 const currentdayname = days[currentday - 1];
console.log('the current day is '+currentdayname) 

// QNO 4
let cd = new Date()
let cdys = cd.getDay()
if(cdys== 5 || cdys == 6){
    console.log("its fun day")
}else{
    console.log("its not the funday its work day")
}

// QNO 5
let new1 = new Date();
let new2 = new1.getMonth;
if(new2 <= 15){
    console.log("first fifteen days of the month")
}else{
    console.log("Last days of the months")
}

// QNO 6
let old = new Date('jan.1,1970')

let old1 = old.getMilliseconds()
let old2 = old.getMinutes()
console.log('old date'+old)
console.log('miliseconds since 1970'+old1)
console.log('minutes since 1970'+old2)



// QN0 7
let one = new Date();
let two = one.getTime();
if(two <=12){
    console.log("ITS AM")
}else{
    console.log('ITS PM')
}


// QNO 8
let three = new Date();
three.setMonth(11);
three.setDate(31)
console.log(three)

// QNO 10
let four = + prompt("enter your age in years")
let five = new Date();
let six = five.getFullYear() - four;
alert('the years of your birth is '+six)



// Qno 11
 alert("=== Welcome the k-electric company ======")
let Cname = prompt("Enter your name")
let Mname = prompt("Enter month name")
let units =  + prompt("Enter the units you have used")
let ChargePerunit = 16;
let netCharge = units * ChargePerunit;
let lateChagers = 350;
let groceyamount= netCharge + lateChagers;

console.log("customer Name :" +Cname);
console.log("Month  :" +Mname);
console.log("Numbers of units :" +units);
console.log("charge per unit  :"+ChargePerunit);
console.log('net amount payable (within due date): '+netCharge);
console.log("late payments charges is :"+lateChagers);
console.log("Grocerry amount payable (after dua date) :"+groceyamount)
 112 changes: 112 additions & 0 deletions112  
ch35to38.js
@@ -0,0 +1,112 @@
// QNO 1
function time(){
    let time1 = new Date()
    console.log(time1)
}
time();

// QNO 2
function fullNeme(){
    let name = prompt("enter your first name")
    let last = prompt("enter your last name")
    let fullN = name +' '+ last
    alert(fullN)
}
fullNeme();

// QNO 3
function sum(){
    let num1 = + prompt("enter the first number")
    let num2 = + prompt("enter the second number")
    return num1 + num2;
}
alert('the sum of two numbers is = '+sum());

// Qno 4
// Function to perform a mathematical operation
function calculateResult(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}

const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operator (+, -, *, /):");

// // Call the function and display the result
const result = calculateResult(number1, number2, operation);

// // Display the result in the browser
alert("Result: " + result);


// Qno 5

function square(number){

    return  number*number
}
console.log(square(7))


// QNO 6
 function factorial(num){
    let facto = 5
        for(let i=1 ; i<=facto; i++){
            console.log(facto *= i)
        }

 }
 console.log(factorial())

// QNO 7
function triangle(){
      let base = + prompt("enter the triangle base")
      let perp = + prompt("enter the triangle perpendicular")
      const hyp = base + perp
      return hyp
}
alert( 'the angle of right angle trianglr is '+triangle())




// Qno 8

 function area(width,heigth){
    return area = width * heigth
 }
 alert(area(20,30))


// QNO 9












 47 changes: 47 additions & 0 deletions47  
ch38to42.js
@@ -0,0 +1,47 @@
// console.log("hamza")
// QNO 1
function triangle(a,b,c){
    let s;
    return s = ( a + b + c ) / 2
}
alert(triangle(2,3,5))


// QNO 2
function power(a,b){
  return a*a || b*b
}
alert(power(3,0))
alert(power(0,5))

// QNO 3
function mainFuntion(){
    let a = + prompt("Enter first subject marks")
    let b = + prompt("Enter second subject marks")
    let c = + prompt("Enter third subject marks")
    let result = (a+b+c)/3;
    return result;
}
alert("the average of marks is "+mainFuntion())


// QNO 4
function percentage(){
    let a = + prompt("Enter first subject marks")
    let b = + prompt("Enter second subject marks")
    let c = + prompt("Enter third subject marks")
    let result = ((a+b+c)/300)*100
    return result;
}
alert("the percentage of marks is "+percentage()+'%')


// Qno 5
function kilimeters(){
    let a = + prompt("Enter the numbers in kilometer")
         let result =  a * 1000
        return result;
}
alert("the value is "+kilimeters()+' meters')






