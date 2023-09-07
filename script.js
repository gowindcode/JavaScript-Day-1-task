// Basic of language 
console.log("Hello world")
console.log("Welcome world")
console.log("Enter")
console.log("Win")

// console.log("Enter in")
/*console.log("Enter here")*/

var a = 50;
console.log(a);

var B
B = 20;
console.log(B);

// different types of variable declaration

var z = 35;
z = 40; //we can reassign a value
var y = 45; //we can redeclare a name 

console.log(z); //aswell we can get a result
console.log(y);

//let

let c = 99;
 c = 88; //we can reassign a value 
 let d = 77; //we cannot redeclaration a name
console.log(c);
console.log(d);

//const

const studentName = "Subramaniyan";
const studentName1 = "Murugan"; //we can not reassign a value
//const studentName = "kumaran"; //we can not redeclare
console.log(studentName, studentName1);
// console.log(studentName1);

var a = 1;
b = 2; 
c = 3;

// i = a, b, c;

// for(let i=o; i<3; i++);
// console.log(""Biggest Number")
console.log(c);

//data types
// primtive
// String -> "" or ''
// Boolean -> True or false
// Number -> 01234
// null -> nothing
// undefined -> no value input
// float -> 77.56

//String

let name = "murugan";
console.log((name));

//Boolean -> if else statement


//null (means nothing)
let value = null;
console.log(value);
value = 100;
console.log(value);

//undifined (there is no value)
let value2
console.log(value2);


//array -> like a bag or super market bunch of things
const axe = [99, "Palani", true, null, 77.88];
console.log(axe);
console.log(axe[0]);
console.log(axe[1]);
console.log(axe[2]);
console.log(axe[3]);
console.log(axe[4]);
console.log(axe[1], axe[2]);


//objects
//key : values define
const sampleObj = {
name: "subramaniyan",
education: "B.E",
age: 25,
};
console.log(sampleObj);
console.log(sampleObj.name, sampleObj.age);
console.log(sampleObj.education);

// operators
// loops
// conditions
// function with return keyword
// inbuild functions

let e = 1000;
console.log(e);

console.log("----------------------------------------------------");
console.log("operators");
// two different values campare and give a result
// arithmetic operators
// + - * / % ++ --
let val1 = 90;
let val2 = 99;

console.log("Add", val1 + val2);
console.log("Sub", val1 - val2);
console.log("Multiple", val1 * val2);
console.log("Divded", val1 / val2);
console.log("Reminder", val1 % val2);


console.log("Before increase value1:", val1);
val1++;
console.log("After increase value1:", val1);

console.log("Before decrease value1:", val1);
val1--;
console.log("After decrease value1:", val1);




val2--;
console.log("decrease value1:", val2);

// console.log("decrease value:", val1);
// val2--;
// console.log("decrease value2:", val2);
console.log("_________________________________________________________")
console.log("Assignment Operators");

let total = 100 ;
total += 50;
console.log("Quantity:", total);

// another exampe in assignment operators using "-"

let cost = 500;
cost -= 35;
console.log("Cost:", cost);


console.log("_________________________________________________________")
console.log("Comparison Operators");

const mark1 = 100; // this is number type
const mark2 = "100"; // this is string type

console.log("Non strict comparison is:" , mark1==mark2); //result true because this is checked value, but not checked type.
console.log("Strict comparison is:" , mark1===mark2); //result false because this is checked value and type.

console.log("Not equal is:" , mark1!=mark2); //result false because this not checked type and showing result straight opposite like mirror type.
console.log("Not equal comparison is:" , mark1!==mark2); //result true because this is checked type and value, but showing result straight opposite === , like mirror type.

console.log("grater than mark2:" , mark1 > mark2); //result false because both are equal
console.log("lesser than mark2:" , mark1 < mark2); //result false because both are equal  

console.log("grater than equal:" , mark1 >= mark2); //result true because this having equal values 
console.log("grater than:" , mark1 <= mark2); //result true because this having equal values

console.log("/////////////////////////////////////______________________________________more examples on > greater than and < lesser than or >= , <= equal too_______________________________________________///////////////////////////////////////");

const apple = 100;
const apple1 = 120;
const apple0 = "100";

console.log("apple is greater than apple0:", apple > apple1);
console.log("apple is greater than apple1:", apple > apple1);
console.log("apple is lesser than apple1:", apple < apple1);
console.log("apple1 is lesser than apple:", apple1 < apple);
console.log("apple is greater than apple0 or equal:",apple >= apple0);
console.log("apple is greater than apple1 or equal:",apple >= apple1);
console.log("apple is lesser than apple1 or equal:", apple1 <= apple);
console.log("apple equal to apple0:", apple == apple0);
console.log("apple0 equal to apple1:", apple0 === apple1);

const apple2 = 100;
const apple3 = 100;

console.log("apple2 is greater than apple3 or equal:", apple2 >= apple3);
console.log("apple2 is lesser than apple3 or equal:", apple2 <= apple3);

let orange = 100;
let orange1 = "100";
let orange2 = 120;

console.log("orange is greater than orange1:", orange > orange1);
console.log("orange is lesser than orange1:", orange < orange1);
console.log("orange2 is greater than orange:", orange < orange2);
console.log("orange1 equal to orange2:", orange1 == orange2);
console.log("orange equal to orange1:", orange === orange1); //so here string value also considering, that's the reason result is false
console.log("using not ! orange is greater than orange1:", orange != orange1);

console.log("logical operators________________________________________________");
//  &&   ||     !

const task = 80;
const attendence = 75;
const score = 77;

console.log("task = 80");
console.log("attendence = 75");
console.log("score = 77");
console.log("score is more than task and score is more than attendence:", score > task && score > attendence);
console.log("score is lesser than task and score is more than attendence:", score < task && score > attendence);
console.log("score is equal to attendence and score is equal to task:", score == attendence || score == task);
console.log("score is equal to attendence or score is equal to task:", !(score == attendence || score == task)); //now the result is true, that means actualy it is false, but we used ! syntex so result is opposite
console.log("score is less than attendence or score is less than task:", score < attendence || score < task);

console.log("loops________________________________________________");
//let i = this is variable and put value i = 0
// condition i<=5 this means up to target value
// then value is update, that means i++ or -- or += or -+
//i = 1 this is smaller than 5 so true, so move to next then value update i++ = now 2
// now i value is 2 so still smaller than 5 (true) again value update i++ = 3
// now i value is 3 so still smaller than 5 (true) again value update i++ = 4
// now i value is 4 so still smaller than 5 (true) again value update i++ = 5
// now i value is 5 so still smaller than or equal to 5 (true) so again value update i++ = 6
// now i value is 6, now i value is not smaller than or equal to 5 (false) so loop exit.
//define skip values like ++ -- +=2 or 5 and more

for (let i = 0; i <=5; i++) {
console.log("value i =" , i);
}

//for loop ascending order upto highest value or equal to 45
for (let size = 1; size <=45; size+=2) {
    console.log("Size =", size)
}

//for loop Descending Order upto equal to 1
for (let day = 30; day >=1; day--){
    console.log("Day Reverse =", day)
}

console.log("________________________________________________________");
console.log("conditions");

let fail = 34;
let pass = 35;
let good = 60;
let excellent = 90;

let yourScore = 34;

if (yourScore > excellent){
    console.log("You are Scored Excellent");
} 
else if (yourScore > good){
    console.log("You are good"); 
} 
else if (yourScore > pass){
    console.log("You are passed");
} 
else if (yourScore > fail){
    console.log("You are just passed");
}  
else {
    console.log("You are failed");
}

//Switch case (results based purpose only)

const day = 1;
switch (day) {
case 0:
    console.log("Sunday");
    break;
case 1:
     console.log("Monday");
     break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednsday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
default:
    console.log("You have not entered Date");
}


function pedal (){
    console.log("Move the cycle forward");
}

function handleBar (){
    console.log("Using for vehicle direction");
}

function cahin (){
    console.log("rotate the wheel");
}

pedal();
handleBar();
cahin();

// now we can calclate values by using function

function add1(num1,num2){
console.log(num1 + num2); //here we are using console.log(num1,num2)
}

function sub1(num1,num2){
console.log(num1 - num2);
}

function mul1(num1,num2){
console.log(num1 * num2);
}

function div1(num1,num2){
    console.log(num1 / num2);
}

// function per1(num1,num2){
    // console.log(num1 % num2);
// }
    
add1(5,10);
sub1(25,5);
mul1(1111, 99999);
div1(25000000, 20);
// per1((2000000 % 10) / (100))

//store the result by using return key
// here we have not using console.log

function add(num1, num2){
return num1 + num2;
}

function sub(num1, num2){
return num1 - num2;
}

function mul(num1, num2){
return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function per(num1, num2){
    return num1 % num2;
}

// mul(1, 3); //here is not value consoled, so not result optput,

const result = add(7,8);
console.log("one time adding value", result+100);

const subResult = sub(100, 25);
console.log("one time subtraction value", subResult-33);

const mulResult = mul(7,8);
console.log("one time multiple value", mulResult*100);

const divResult = div(7,8);
console.log("one time division value", result/100);

const perResult = per(7,8);
console.log("one time percentage value", result%100);

// add(100, 360);

function calculator (type, num1, num2) {
    switch (type) {
        case "add":
            return num1 + num2;
            case "sub":
                return num1 - num2;
            case "mul":
                return num1 * num2;
            case "div":
                return num1 / num2;
            case "per":
                return num1 % num2;
            default:
                return "please check your inputs";
    }
}



const result0 = calculator ("add", 40, 55);
console.log("calculator add =",result0);


const result1 = calculator ("sub", 40, 55);
console.log("calculator sub =",result1);


const result2 = calculator ("mul", 40, 55);
console.log("calculator mul =",result2);


const result3 = calculator ("div", 40, 55);
console.log("calculator div =", result3);


const result4 = calculator ("per", 40, 55);
console.log("calculator per", result4);


const result5 = calculator ("Mul", 40, 55); //here we have not return "Mul" , so Mul out put is please check your inputs.
console.log(result5);

console.log("________________________codekata day 3 _________________________");
//codekata day 3 Thrusday 24.08.2023
// semicolon is a line breaker, java script consider the line or the particular the line has ended.

for (let n = 0; n <=5; n++) {
    console.log("value n =" , n+1);
    }

const x = Math.max(1,2,3);
console.log("Biggest Number is :", x);

// if (let big = [n1, n2, n3]);{
// console.log(big);
// }
// let area = Math.max(big);
// console.log(area);

console.log("_______________________Celsius to fahrenheit formula");

let c1 = 12;
let f = 0;
f = (c1*(9/5))+32;
let n = (f).toFixed(2);
console.log(n);

console.log("________________________________find the largest number among these three A,B,C");

const X = 1;
const Y = 2;
const Z = 3;
// const A = userInput[0];
// const B = userInput[1];
// const C = userInput[2];

// x is greater than y and x is greater than z

if (X>Y && X>Z){   
    console.log(X);
}
else if (Y>Z && Y>X){
    console.log(Y);
}
else {
    console.log(Z);
}

// output answer is 3

// find a odd and even number

const value3 = 0;
const value4 = 2;
const value5 = 88;
const value6 = 99;

if (value3 == 0) {
    console.log("ZERO");
}
else if (Math.round(value3) %2 == 0){
    console.log("EVEN");
}
// else if (Math.round(value4) %2 == 0){
//     console.log("EVEN");
// }
// else if (Math.round(value5) %2 == 0){
//     console.log("EVEN");
// }
// else if (Math.round(value6) %2 == 0){
//     console.log("EVEN");
// }
else {
console.log("ODD");
}

console.log("___________________find a month by input numbers_________");
// find a month days

// const value7 = 26;

// if(value7 == "febuary"){
//     console.log(28);
// }
// else if (value7 == "january" && "march" && "may" && "july" && "august" && "october" && "december"){
//     console.log("31");
// }
// else if (value7 == "april" && "june" && "september" && "november"){
// console.log("30");
// }
// else {
//     console.log("Error");
// }

const value7 = 98;
console.log("Typeof:", typeof(value7));

if(value7 == "febuary"){
    console.log("28");
}
else if (value7 === "january" || 
value7 === "march" || 
value7 === "may" || 
value7 === "july" || 
value7 === "august" || 
value7 === "october" || 
value7 === "december"){
    console.log("31");
}
else if (value7 === "april" || 
value7 === "june" || 
value7 === "september" || 
value7 === "november"){
console.log("30");
}
else {
    console.log("Error");
}

// ^ above code is showing wrong output

function findtheMulitple(number, multiple){
var val = ""
for(let k = 1; k <= multiple; k++){
    val += (number*k) + " "
}
console.log(val);
}
findtheMulitple(5,3)

function findtheMulitple(number, multiple){
    var vol = ""
    for(let k = 1; k <= multiple; k++){
        vol += (number*k) + " , "
    }
    console.log(vol);
    }
    findtheMulitple(1,10)

console.log("_______________________Write a code to get an integer N and print the digits of the integer_______________");

// absolute beginner27
// Write a code to get an integer N and print the digits of the integer.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the digits of the integer in a single line separated by space,

// Sample Input :
// 348
// Sample Output :
// 3 4 8

let value8 = "348";
console.log(typeof(value8));
console.log((value8.length));
console.log(value8.split("").join(" "));



console.log("_________________Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, ......._________");
// You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

// (Print "Error" if N = negative value and 0 if N = 0).

// Input Description:
// An integer N is provided to you as the input.

// Output Description:
// Find the Nth term in the provided series.

// Sample Input :
// 18
// Sample Output :
// 324

// var p=89;

// if (p < 0) {
// console.log('Error');

// }

// // if number is 0

// else if (p === 0) {
// console.log('0');

// }

// // if number is positive

// else {
// let ans = p;

// for (i = 1; i <= p; i++) {
// ans = p*p;

// }

// console.log(ans);

// }

// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

 

// Input Description:

// First line contains an integer A. Second line contains an Integer N.

 

// Output Description:

// Print the integer A, N times in a separate line.

 

// Sample Input :

// 2 3

// Sample Output :

// 2

// 2

// 2

// sanjay guvi
// 02:42:10
// const inputs = +userInput[0];

// if(inputs <0){

//     console.log("Error")

// }else {

//     // radius of circle 2*pi*r

//     const circle = 2 * Math.PI* inputs

//     console.log(circle.toFixed(2))

    

// }

// sanjay guvi
// 02:45:39
// const inputs = userInput[10].split("");

// console.log(inputs)

// const sortedInputs = inputs.sort();

// console.log(sortedInputs)

 

// let evenValue = "";

// let oddValues = "";

 

// for(let i=0; i<sortedInputs.length; i++){

    

    //finding inputs

//    if(sortedInputs[i] %2 == 0){

//        evenValue += sortedInputs[i] + " ";

//    }else{

//        oddValues += sortedInputs[i] + " ";

//    }

// }

 

// console.log(evenValue.trim())

// console.log(oddValues.trim())

const side = 20
const area = (Math.sqrt(3)/4) * (Math.pow(side,2));
console.log(area.toFixed(2))
// answer out put is 173.21

console.log("_____________________________separate odd and even number");

// absolute beginner24
// Share
// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3
const num = "1234".split("");
const sortedInputs = num.sort();

let evenValue = " ";
let oddValues = " ";

for (let i = 0; i < sortedInputs.length; i++){
    if (sortedInputs[i] % 2 === 0){
        evenValue += sortedInputs[i] + " ";
    }
    else {
        oddValues += sortedInputs[i] + " ";
    }
}
  console.log("evenValue is:", evenValue.trim());
  console.log("oddvalues is:", oddValues.trim());
//   output is 
//   evenvalue is: 2 4
//   oddvalues is: 1 3


console.log("_______________radius of circle A____________");
// absolute beginner6

// You are provided with the radius of a circle "A". Find the length of its circumference.

// Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

// Input Description:
// The Radius of a circle is provided as the input of the program.

// Output Description:
// Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

// Sample Input :
// 2
// Sample Output :
// 12.57

